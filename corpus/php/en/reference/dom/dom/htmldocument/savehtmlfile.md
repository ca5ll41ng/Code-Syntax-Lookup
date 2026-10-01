---
id: "en-php-function-dom-htmldocument-savehtmlfile"
language: "php"
lang: "en"
category: "function"
name: "Dom\\HTMLDocument::saveHtmlFile"
title: "Serializes the document as an HTML file"
signature: "public int|false Dom\\HTMLDocument::saveHtmlFile(string $filename)"
module: "dom"
source_url: "https://www.php.net/manual/en/dom-htmldocument.savehtmlfile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Serializes the document as an HTML file

## Description

```php
public int|false Dom\HTMLDocument::saveHtmlFile(string $filename)
```

Serializes the document as an HTML file.

## Parameters

- **`$filename`** — The path to the file to save to.

## Return Values

The number of bytes written on success, or `false` on failure.

## Errors/Exceptions

- Throws a ValueError if `$filename` is an empty string or contains any null bytes.

## See Also

 `Dom\HTMLDocument::saveHtml()` `Dom\HTMLDocument::saveXmlFile()`
