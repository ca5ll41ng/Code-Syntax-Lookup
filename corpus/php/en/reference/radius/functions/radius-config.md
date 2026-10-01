---
id: "en-php-function-function-radius-config"
language: "php"
lang: "en"
category: "function"
name: "radius_config"
title: "Causes the library to read the given configuration file"
signature: "bool radius_config(resource $radius_handle, string $file)"
module: "radius"
source_url: "https://www.php.net/manual/en/function.radius-config.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Causes the library to read the given configuration file

## Description

```php
bool radius_config(resource $radius_handle, string $file)
```

Before issuing any Radius requests, the library must be made aware of the servers it can contact. The easiest way to configure the library is to call `radius_config()`. `radius_config()` causes the library to read a configuration file whose format is described in [radius.conf]().

## Parameters

- **`$radius_handle`**
- **`$file`** — The pathname of the configuration file is passed as the file argument to `radius_config()`. The library can also be configured programmatically by calls to `radius_add_server()`.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `radius_add_server()`
