---
id: "en-php-function-wkhtmltox-pdf-converter-construct"
language: "php"
lang: "en"
category: "function"
name: "wkhtmltox\\PDF\\Converter::__construct"
title: "Create a new PDF converter"
signature: "public wkhtmltox\\PDF\\Converter::__construct([array $settings = ...])"
module: "wkhtmltox"
source_url: "https://www.php.net/manual/en/wkhtmltox-pdf-converter.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a new PDF converter

## Description

```php
public wkhtmltox\PDF\Converter::__construct([array $settings = ...])
```

Creates a PDF converter, using optional configuration settings

## Parameters

- **`$settings`** — | Name | Description | Values | Changelog | | --- | --- | --- | --- | | size.pageSize | paper size of output document | A4 | >= 0.1.0 | | size.width | with of the output document | 210mm | >= 0.1.0 | | size.height | height of the output document | 297mm | >= 0.1.0 | | orientation | orientation of the output document | \| Landscape \| \| --- \| \| Portrait \| | >= 0.1.0 | | colorMode | color mode of the output document | \| Color \| \| --- \| \| Greyscale \| | >= 0.1.0 | | resolution | resolution of the output document | most likely has no effect | >= 0.1.0 | | dpi | dpi to use while printing | 80 | >= 0.1.0 | | pageOffset | integer added to page numbers generating headers, footers, and toc | | >= 0.1.0 | | copies | | | >= 0.1.0 | | collate | collate copies | boolean | >= 0.1.0 | | outline | generate PDF outline | boolean | >= 0.1.0 | | outlineDepth | maximum depth of outline | | >= 0.1.0 | | dumpOutline | path of file to dump outline XML | | >= 0.1.0 | | out | path of output file, if "-" stdout is used | | >= 0.1.0 | | documentTitle | title for the output document | | >= 0.1.0 | | useCompression | enable or disable lossless compression | boolean | >= 0.1.0 | | margin.top | size of the top margin | 2cm | >= 0.1.0 | | margin.bottom | size of the bottom margin | 2cm | >= 0.1.0 | | margin.left | size of the left margin | 2cm | >= 0.1.0 | | margin.right | size of the right margin | 2cm | >= 0.1.0 | | imageDPI | maximum DPI for images in the output document | | >= 0.1.0 | | imageQuality | the jpeg compression factor for images in the output document | 94 | >= 0.1.0 | | load.cookieJar | path of file used to load and store cookies | /tmp/cookies.txt | >= 0.1.0 |

 Return values commented out, as constructors generally don't return a value. Uncomment this if you do need a return values section (for example, because there's also a procedural version of the method). <refsect1 role="returnvalues"> <title>Return Values</title> <para> </para> </refsect1>
