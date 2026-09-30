# Cree logo.svg et logo-light.svg : SVG minimal embarquant le PNG detoure en base64
Add-Type -AssemblyName System.Drawing
$png = "C:\Users\fallb\OneDrive\Desktop\projet Einstein Services\img\logo-transparent.png"
$img = [System.Drawing.Image]::FromFile($png)
$w = $img.Width; $h = $img.Height
$img.Dispose()
$b64 = [Convert]::ToBase64String([IO.File]::ReadAllBytes($png))
$svg = @"
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 $w $h" width="$w" height="$h">
  <!-- Logo officiel Einstein Services (image raster integree) -->
  <image xlink:href="data:image/png;base64,$b64" x="0" y="0" width="$w" height="$h"/>
</svg>
"@
[IO.File]::WriteAllText("C:\Users\fallb\OneDrive\Desktop\projet Einstein Services\img\logo.svg", $svg)
[IO.File]::WriteAllText("C:\Users\fallb\OneDrive\Desktop\projet Einstein Services\img\logo-light.svg", $svg)
"OK : logo.svg et logo-light.svg crees (${w}x${h}, $([Math]::Round($b64.Length/1KB)) KB base64)"
