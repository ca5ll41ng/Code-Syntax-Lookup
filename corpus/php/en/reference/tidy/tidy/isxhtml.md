---
id: "en-php-function-tidy-isxhtml"
language: "php"
lang: "en"
category: "function"
name: "tidy::isXhtml"
aliases: ["tidy_is_xhtml"]
title: "Indicates if the document is a XHTML document"
signature: "public bool tidy::isXhtml()"
module: "tidy"
source_url: "https://www.php.net/manual/en/tidy.isxhtml.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Indicates if the document is a XHTML document

## Description

Object-oriented style

```php
public bool tidy::isXhtml()
```

Procedural style

```php
bool tidy_is_xhtml(tidy $tidy)
```

Tells if the document is a XHTML document.

## Parameters

- **`$tidy`** — The `Tidy` object.

## Return Values

This function returns `true` if the specified tidy `$tidy` is a XHTML document, or `false` otherwise.

> This function is not yet implemented in the Tidylib itself, so it always return `false`.
