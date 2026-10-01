---
id: "en-php-function-tidy-gethtmlver"
language: "php"
lang: "en"
category: "function"
name: "tidy::getHtmlVer"
aliases: ["tidy_get_html_ver"]
title: "Get the Detected HTML version for the specified document"
signature: "public int tidy::getHtmlVer()"
module: "tidy"
source_url: "https://www.php.net/manual/en/tidy.gethtmlver.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the Detected HTML version for the specified document

## Description

Object-oriented style

```php
public int tidy::getHtmlVer()
```

Procedural style

```php
int tidy_get_html_ver(tidy $tidy)
```

Returns the detected HTML version for the specified tidy `$tidy`.

## Parameters

- **`$tidy`** — The `Tidy` object.

## Return Values

Returns the detected HTML version.

> This function is not yet implemented in the Tidylib itself, so it always return `0`.
