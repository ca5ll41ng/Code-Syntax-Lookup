---
id: "en-php-function-function-rpmgetsymlink"
language: "php"
lang: "en"
category: "function"
name: "rpmgetsymlink"
title: "Get target of a symlink"
signature: "string|null rpmgetsymlink(string $path, string $name)"
module: "rpminfo"
source_url: "https://www.php.net/manual/en/function.rpmgetsymlink.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get target of a symlink

## Description

```php
string|null rpmgetsymlink(string $path, string $name)
```

Get target of a symlink.

## Parameters

- **`$path`** — Path of the RPM file.
- **`$name`** — Name of the symlink file.

## Return Values

A `string` with target of the symlink, `null` on error, or an empty string if not a symlink.
