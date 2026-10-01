---
id: "en-php-function-wkhtmltox-pdf-object-construct"
language: "php"
lang: "en"
category: "function"
name: "wkhtmltox\\PDF\\Object::__construct"
title: "Create a new PDF Object"
signature: "public wkhtmltox\\PDF\\Object::__construct(string $buffer, [array $settings = ...])"
module: "wkhtmltox"
source_url: "https://www.php.net/manual/en/wkhtmltox-pdf-object.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a new PDF Object

## Description

```php
public wkhtmltox\PDF\Object::__construct(string $buffer, [array $settings = ...])
```

Creates a new PDF Object from the given buffer and optional configuration settings

## Parameters

- **`$buffer`** — HTML
- **`$settings`** — | Name | Description | Values | Changelog | | --- | --- | --- | --- | | page | URL or path of the HTML to convert | | >= 0.1.0 | | useExternalLinks | set true to convert external links in the input into external PDF links in the output | boolean | >= 0.1.0 | | useLocalLinks | set true to convert internal links in the input into internal PDF links in the output | boolean | >= 0.1.0 | | produceForms | set true to turn HTML forms into PDF forms | boolean | >= 0.1.0 | | replacements | undocumented | | >= 0.1.0 | | includeInOutline | set true to include sections from this object in the outline and toc | boolean | >= 0.1.0 | | pagesCount | set true to make page count in toc inclusive of the number of pages in this object | boolean | >= 0.1.0 | | tocXsl | set to style sheet to convert this object into a toc object | | >= 0.1.0 | | toc.useDottedLines | set true to use dotted lines in toc | boolean | >= 0.1.0 | | toc.captionText | the caption text for toc | | >= 0.1.0 | | toc.forwardLinks | set true to create links from toc to content | boolean | >= 0.1.0 | | toc.backLinks | set true to create links from content to toc | boolean | >= 0.1.0 | | toc.indentation | indentation for toc | 2em | >= 0.1.0 | | toc.fontScale | the factor to scale down the font at every toc level | 0.8 | >= 0.1.0 | | header.fontSize | font size for use in header | 13 | >= 0.1.0 | | header.fontName | name of font for use in header | times | >= 0.1.0 | | header.left | text for left of header | | >= 0.1.0 | | header.center | text for center of header | | >= 0.1.0 | | header.right | text for right of header | | >= 0.1.0 | | header.line | enable or disable horizontal rule under header | boolean | >= 0.1.0 | | header.spacing | space between header and content | 1.8 | >= 0.1.0 | | header.htmlUrl | URL or path of HTML to use in header | | >= 0.1.0 | | footer.fontSize | font size for use in footer | 13 | >= 0.1.0 | | footer.fontName | name of font for use in footer | times | >= 0.1.0 | | footer.left | text for left of footer | | >= 0.1.0 | | footer.center | text for center of footer | | >= 0.1.0 | | footer.right | text for right of footer | | >= 0.1.0 | | footer.line | enable or disable horizontal rule under footer | boolean | >= 0.1.0 | | footer.spacing | space between footer and content | 1.8 | >= 0.1.0 | | footer.htmlUrl | URL or path of HTML to use in footer | | >= 0.1.0 | | load.username | user name to use when loging into a website | bart | >= 0.1.0 | | load.password | the password to used when logging into a website | elbarto | >= 0.1.0 | | load.jsdelay | the amount of time in milliseconds to wait after a page is loaded until it is captured | 1200 | >= 0.1.0 | | load.zoomFactor | how much zoom should be applied to the content | 2.2 | >= 0.1.0 | | load.customHeaders | custom headers to send when requesting the main web page | | >= 0.1.0 | | load.repertCustomHeaders | set true to send with all requests | boolean | >= 0.1.0 | | load.cookies | cookie string to send when requesting the main web page | | >= 0.1.0 | | load.post | post string to send when requesting the main web page | | >= 0.1.0 | | load.blockLocalFileAccess | disallow local and piped files to access other local files | boolean | >= 0.1.0 | | load.stopSlowScript | stop slow running javascript | boolean | | | load.debugJavascript | allow javascript to raise warnings | boolean | >= 0.1.0 | | load.loadErrorHandling | set error handling strategy | \| abort \| abort the convertion process \| \| --- \| --- \| \| skip \| do not add the object to the final output \| \| ignore \| try to add the object to the final output \| | >= 0.1.0 | | load.proxy | | | >= 0.1.0 | | web.background | include background image in output | boolean | >= 0.1.0 | | web.loadImages | include images in output | boolean | >= 0.1.0 | | web.enableJavascript | enable or disable javascript | boolean | >= 0.1.0 | | web.enableIntelligentShrinking | enable to attempt to fit more content on page, only applies to PDF output | boolean | >= 0.1.0 | | web.minimumFontSize | the minimum font size allowed | 9 | >= 0.1.0 | | web.printMediaType | print content using print media type instead of screen media type | boolean | >= 0.1.0 | | web.defaultEncoding | content to use where no encoding is specified | utf-8 | >= 0.1.0 | | web.userStyleSheet | URL or path to a user specified style sheet | /path/to/style.css | >= 0.1.0 | | web.enablePlugins | enable or disable NS plugins | boolean | >= 0.1.0 |

 Return values commented out, as constructors generally don't return a value. Uncomment this if you do need a return values section (for example, because there's also a procedural version of the method). <refsect1 role="returnvalues"> <title>Return Values</title> <para> </para> </refsect1>
