Add-Type -AssemblyName System.Drawing
$src = "C:\Users\fallb\OneDrive\Desktop\projet Einstein Services\img\logo.jpg"
$bmp = [System.Drawing.Bitmap]::new($src)
$w = $bmp.Width; $h = $bmp.Height
$rect = [System.Drawing.Rectangle]::new(0, 0, $w, $h)
$data = $bmp.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadOnly, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$bytes = [byte[]]::new($data.Stride * $h)
[System.Runtime.InteropServices.Marshal]::Copy($data.Scan0, $bytes, 0, $bytes.Length)
$bmp.UnlockBits($data)
$bmp.Dispose()
"stride=$($data.Stride) attendu=$($w*4) taille=$($bytes.Length)"

# test pixel (5,757) : R170 G188 B224
$i = (757 * $w + 5) * 4
$bl = $bytes[$i]; $g = $bytes[$i + 1]; $r = $bytes[$i + 2]
"pixel(5,757): B=$bl G=$g R=$r"
$min = [Math]::Min($r, [Math]::Min($g, $bl)); $max = [Math]::Max($r, [Math]::Max($g, $bl))
"min=$min max=$max diff=$($max-$min) -> Is-Bg: $($min -gt 150 -and ($max - $min) -lt 65)"

# test la fonction elle-meme
function Test-IsBg([byte[]]$b, [int]$idx) {
    $rr = $b[$idx + 2]; $gg = $b[$idx + 1]; $bb = $b[$idx]
    $mn = [Math]::Min($rr, [Math]::Min($gg, $bb))
    $mx = [Math]::Max($rr, [Math]::Max($gg, $bb))
    return ($mn -gt 150 -and ($mx - $mn) -lt 65)
}
"Test-IsBg -> $(Test-IsBg $bytes $i)"
$type = $min.GetType().Name
"type min: $type"
