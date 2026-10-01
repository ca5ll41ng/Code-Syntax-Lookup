---
id: "en-php-function-ziparchive-getexternalattributesname"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::getExternalAttributesName"
title: "Retrieve the external attributes of an entry defined by its name"
signature: "public bool ZipArchive::getExternalAttributesName(string $name, int $opsys, int $attr, int $flags = 0)"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.getexternalattributesname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the external attributes of an entry defined by its name

## Description

```php
public bool ZipArchive::getExternalAttributesName(string $name, int $opsys, int $attr, int $flags = 0)
```

Retrieve the external attributes of an entry defined by its name.

## Parameters

- **`$name`** — Name of the entry.
- **`$opsys`** — On success, receive the operating system code defined by one of the ZipArchive::OPSYS_ constants.
- **`$attr`** — On success, receive the external attributes. Value depends on operating system.
- **`$flags`** — If flags is set to `ZipArchive::FL_UNCHANGED`, the original unchanged attributes are returned.

## Return Values

Returns `true` on success or `false` on failure.
