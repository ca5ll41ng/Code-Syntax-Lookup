---
id: "en-php-function-wkhtmltox-image-converter-construct"
language: "php"
lang: "en"
category: "function"
name: "wkhtmltox\\Image\\Converter::__construct"
title: "Create a new Image converter"
signature: "public wkhtmltox\\Image\\Converter::__construct([string $buffer = ...], [array $settings = ...])"
module: "wkhtmltox"
source_url: "https://www.php.net/manual/en/wkhtmltox-image-converter.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a new Image converter

## Description

```php
public wkhtmltox\Image\Converter::__construct([string $buffer = ...], [array $settings = ...])
```

Creates an Image converter, optionally taking an input buffer and configuration settings

## Parameters

- **`$buffer`** — HTML
- **`$settings`** — | Name | Description | Values | Changelog | | --- | --- | --- | --- | | in | URL or path of the input file, if "-" stdin is used | /path/to/markup.html | >= 0.1.0 | | out | path of output file, if "-" stdout is used, by default an internal buffer is used | /path/to/output.png | >= 0.1.0 | | fmt | output format to use | \| "" \| default \| \| --- \| --- \| \| jpg \| output as JPEG \| \| png \| output as PNG \| \| bmp \| output as bitmap \| \| svg \| output as SVG \| | >= 0.1.0 | | transparent | when outputting a PNG or SVG, make the white background transparent | boolean | >= 0.1.0 | | screenWidth | the with of the screen used to render in pixels | 800 | >= 0.1.0 | | smartWidth | when true, screenWidth is expanded to the content width | boolean | >= 0.1.0 | | quality | compression factor to use when outputting a JPEG image | 94 | >= 0.1.0 | | crop.left | left/x coordinate of the window to capture in pixels | 200 | >= 0.1.0 | | crop.top | top/y coordinate of the window to capture in pixels | 200 | >= 0.1.0 | | crop.width | width of the window to capture in pixels | 200 | >= 0.1.0 | | crop.height | height of the window to capture in pixels | 200 | >= 0.1.0 | | load.cookieJar | path of file used to load and store cookies | /tmp/cookies.txt | >= 0.1.0 |

 Return values commented out, as constructors generally don't return a value. Uncomment this if you do need a return values section (for example, because there's also a procedural version of the method). <refsect1 role="returnvalues"> <title>Return Values</title> <para> </para> </refsect1>
