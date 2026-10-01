---
id: "en-php-function-function-sqlsrv-get-config"
language: "php"
lang: "en"
category: "function"
name: "sqlsrv_get_config"
title: "Returns the value of the specified configuration setting"
signature: "mixed sqlsrv_get_config(string $setting)"
module: "sqlsrv"
source_url: "https://www.php.net/manual/en/function.sqlsrv-get-config.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the value of the specified configuration setting

## Description

```php
mixed sqlsrv_get_config(string $setting)
```

Returns the value of the specified configuration setting.

## Parameters

- **`$setting`** — The name of the setting for which the value is returned. For a list of configurable settings, see `sqlsrv_configure()`.

## Return Values

Returns the value of the specified setting. If an invalid setting is specified, `false` is returned.

## See Also

 `sqlsrv_configure()`
