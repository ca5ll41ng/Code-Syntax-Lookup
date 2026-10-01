---
id: "en-php-function-function-sapi-windows-cp-get"
language: "php"
lang: "en"
category: "function"
name: "sapi_windows_cp_get"
title: "Get current codepage"
signature: "int sapi_windows_cp_get(string $kind = \"\")"
module: "misc"
source_url: "https://www.php.net/manual/en/function.sapi-windows-cp-get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get current codepage

## Description

```php
int sapi_windows_cp_get(string $kind = "")
```

Gets the current codepage.

## Parameters

- **`$kind`** — The kind of operating system codepage to get, either `'ansi'` or `'oem'`. Any other value refers to the current codepage of the process.

## Return Values

If `$kind` is `'ansi'`, the current ANSI code page of the operating system is returned. If `$kind` is `'oem'`, the current OEM code page of the operating system is returned. Otherwise, the current codepage of the process is returned.

## See Also

 `sapi_windows_cp_set()`
