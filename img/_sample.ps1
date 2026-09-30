Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::new('C:\Users\fallb\OneDrive\Desktop\projet Einstein Services\img\logo.jpg')
foreach ($pt in @(@(5, 5), @(1074, 5), @(5, 757), @(1074, 757), @(540, 757), @(5, 380), @(200, 600), @(900, 650), @(300, 500), @(540, 100), @(100, 700), @(1000, 300))) {
    $c = $bmp.GetPixel($pt[0], $pt[1])
    Write-Output ("{0},{1} -> R{2} G{3} B{4}" -f $pt[0], $pt[1], $c.R, $c.G, $c.B)
}
$bmp.Dispose()
