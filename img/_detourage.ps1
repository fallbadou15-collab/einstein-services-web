# Détourage par flood-fill depuis les bords + recadrage sur le logo
Add-Type -AssemblyName System.Drawing
$src = "C:\Users\fallb\OneDrive\Desktop\projet Einstein Services\img\logo.jpg"
$dst = "C:\Users\fallb\OneDrive\Desktop\projet Einstein Services\img\logo-transparent.png"
$bmp = [System.Drawing.Bitmap]::new($src)
$w = $bmp.Width; $h = $bmp.Height
$rect = [System.Drawing.Rectangle]::new(0, 0, $w, $h)
$data = $bmp.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadWrite, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$bytes = [byte[]]::new($data.Stride * $h)
[System.Runtime.InteropServices.Marshal]::Copy($data.Scan0, $bytes, 0, $bytes.Length)

function Is-Bg([byte[]]$b, [int]$i) {
    $r = $b[$i+2]; $g = $b[$i+1]; $bl = $b[$i]
    $min = [Math]::Min($r, [Math]::Min($g, $bl))
    $max = [Math]::Max($r, [Math]::Max($g, $bl))
    return ($min -gt 150 -and ($max - $min) -lt 65)
}

$bg = [bool[]]::new($w * $h)
$queue = [System.Collections.Generic.Queue[int]]::new()
foreach ($x in 0..($w-1)) { $queue.Enqueue($x); $queue.Enqueue(($h-1)*$w + $x) }
foreach ($y in 0..($h-1)) { $queue.Enqueue($y*$w); $queue.Enqueue($y*$w + ($w-1)) }
while ($queue.Count -gt 0) {
    $p = $queue.Dequeue()
    if ($bg[$p]) { continue }
    if (-not (Is-Bg $bytes ($p*4))) { continue }
    $bg[$p] = $true
    $x = $p % $w; $y = [Math]::Floor($p / $w)
    if ($x -gt 0)    { $queue.Enqueue($p-1) }
    if ($x -lt $w-1) { $queue.Enqueue($p+1) }
    if ($y -gt 0)    { $queue.Enqueue($p-$w) }
    if ($y -lt $h-1) { $queue.Enqueue($p+$w) }
}
for ($p = 0; $p -lt $w*$h; $p++) {
    if ($bg[$p]) { $bytes[$p*4+3] = 0 }
}

# bbox du contenu opaque
$minX = $w; $maxX = 0; $minY = $h; $maxY = 0
for ($y = 0; $y -lt $h; $y++) {
    for ($x = 0; $x -lt $w; $x++) {
        if ($bytes[($y*$w+$x)*4+3] -gt 0) {
            if ($x -lt $minX) {$minX=$x}; if ($x -gt $maxX) {$maxX=$x}
            if ($y -lt $minY) {$minY=$y}; if ($y -gt $maxY) {$maxY=$y}
        }
    }
}
$m = 6
$minX = [Math]::Max(0, $minX-$m); $minY = [Math]::Max(0, $minY-$m)
$maxX = [Math]::Min($w-1, $maxX+$m); $maxY = [Math]::Min($h-1, $maxY+$m)
$cw = $maxX-$minX+1; $ch = $maxY-$minY+1

[System.Runtime.InteropServices.Marshal]::Copy($bytes, 0, $data.Scan0, $bytes.Length)
$bmp.UnlockBits($data)
$crop = $bmp.Clone([System.Drawing.Rectangle]::new($minX, $minY, $cw, $ch), $bmp.PixelFormat)
$crop.Save($dst, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose(); $crop.Dispose()
"OK ${cw}x${ch} (orig ${w}x${h}, crop from $minX,$minY)"
