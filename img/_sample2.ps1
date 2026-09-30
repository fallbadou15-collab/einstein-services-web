Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::new('C:\Users\fallb\OneDrive\Desktop\projet Einstein Services\img\logo-transparent.png')
"taille: $($bmp.Width)x$($bmp.Height)"
foreach ($pt in @(@(5, 5), @(650, 5), @(5, 148), @(650, 148), @(330, 80), @(330, 10))) {
    $c = $bmp.GetPixel($pt[0], $pt[1])
    Write-Output ("{0},{1} -> A{2} R{3} G{4} B{5}" -f $pt[0], $pt[1], $c.A, $c.R, $c.G, $c.B)
}
$bmp.Dispose()
