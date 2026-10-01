---
id: "en-php-function-function-oci-unregister-taf-callback"
language: "php"
lang: "en"
category: "function"
name: "oci_unregister_taf_callback"
title: "Unregister a user-defined callback function for Oracle Database TAF"
signature: "bool oci_unregister_taf_callback(resource $connection)"
module: "oci8"
source_url: "https://www.php.net/manual/en/function.oci-unregister-taf-callback.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Unregister a user-defined callback function for Oracle Database TAF

## Description

```php
bool oci_unregister_taf_callback(resource $connection)
```

Unregister the user-defined callback function registered to `$connection` by `oci_register_taf_callback()`. See OCI8 Transparent Application Failover (TAF) Support for information.

## Parameters

- **`$connection`** — An Oracle connection identifier.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`oci_register_taf_callback()`
