---
id: "en-php-function-function-sqlsrv-configure"
language: "php"
lang: "en"
category: "function"
name: "sqlsrv_configure"
title: "Changes the driver error handling and logging configurations"
signature: "bool sqlsrv_configure(string $setting, mixed $value)"
module: "sqlsrv"
source_url: "https://www.php.net/manual/en/function.sqlsrv-configure.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Changes the driver error handling and logging configurations

## Description

```php
bool sqlsrv_configure(string $setting, mixed $value)
```

Changes the driver error handling and logging configurations.

## Parameters

- **`$setting`** — The name of the setting to set. The possible values are "WarningsReturnAsErrors", "LogSubsystems", and "LogSeverity".
- **`$value`** — The value of the specified setting. The following table shows possible values: | Setting | Options | | --- | --- | | WarningsReturnAsErrors | 1 (`true`) or 0 (`false`) | | LogSubsystems | SQLSRV_LOG_SYSTEM_ALL (-1) SQLSRV_LOG_SYSTEM_CONN (2) SQLSRV_LOG_SYSTEM_INIT (1) SQLSRV_LOG_SYSTEM_OFF (0) SQLSRV_LOG_SYSTEM_STMT (4) SQLSRV_LOG_SYSTEM_UTIL (8) | | LogSeverity | SQLSRV_LOG_SEVERITY_ALL (-1) SQLSRV_LOG_SEVERITY_ERROR (1) SQLSRV_LOG_SEVERITY_NOTICE (4) SQLSRV_LOG_SEVERITY_WARNING (2) |

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 [SQLSRV Error Handling](). [Logging SQLSRV Activity]().
