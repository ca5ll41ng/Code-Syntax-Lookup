---
id: "en-php-function-ziparchive-setexternalattributesindex"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::setExternalAttributesIndex"
title: "Set the external attributes of an entry defined by its index"
signature: "public bool ZipArchive::setExternalAttributesIndex(int $index, int $opsys, int $attr, int $flags = 0)"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.setexternalattributesindex.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the external attributes of an entry defined by its index

## Description

```php
public bool ZipArchive::setExternalAttributesIndex(int $index, int $opsys, int $attr, int $flags = 0)
```

Set the external attributes of an entry defined by its index.

## Parameters

- **`$index`** — Index of the entry.
- **`$opsys`** — The operating system code defined by one of the ZipArchive::OPSYS_ constants.
- **`$attr`** — The external attributes. Value depends on operating system.
- **`$flags`** — Optional flags. Currently unused.

## Return Values

Returns `true` on success or `false` on failure.
