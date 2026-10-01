---
id: "en-php-function-tidy-isxml"
language: "php"
lang: "en"
category: "function"
name: "tidy::isXml"
aliases: ["tidy_is_xml"]
title: "Indicates if the document is a generic (non HTML/XHTML) XML document"
signature: "public bool tidy::isXml()"
module: "tidy"
source_url: "https://www.php.net/manual/en/tidy.isxml.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Indicates if the document is a generic (non HTML/XHTML) XML document

## Description

Object-oriented style

```php
public bool tidy::isXml()
```

Procedural style

```php
bool tidy_is_xml(tidy $tidy)
```

Tells if the document is a generic (non HTML/XHTML) XML document.

## Parameters

- **`$tidy`** — The `Tidy` object.

## Return Values

This function returns `true` if the specified tidy `$tidy` is a generic XML document (non HTML/XHTML), or `false` otherwise.

> This function is not yet implemented in the Tidylib itself, so it always return `false`.
