---
id: "en-php-function-function-oci-register-taf-callback"
language: "php"
lang: "en"
category: "function"
name: "oci_register_taf_callback"
title: "Register a user-defined callback function for Oracle Database TAF"
signature: "bool oci_register_taf_callback(resource $connection, callable|null $callback)"
module: "oci8"
source_url: "https://www.php.net/manual/en/function.oci-register-taf-callback.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Register a user-defined callback function for Oracle Database TAF

## Description

```php
bool oci_register_taf_callback(resource $connection, callable|null $callback)
```

Registers a user-defined callback function to `$connection`. If `$connection` fails due to instance or network failure, the registered callback function will be invoked for several times during failover. See OCI8 Transparent Application Failover (TAF) Support for information.

When `oci_register_taf_callback()` is called multiple times, each registration overwrites the previous one.

Use `oci_unregister_taf_callback()` to explicitly unregister a user-defined callback.

TAF callback registration will NOT be saved across persistent connections, therefore the callback needs to be re-registered for a new persistent connection.

## Parameters

- **`$connection`** — An Oracle connection identifier.
- **`$callback`** — A user-defined callback to register for Oracle TAF. It can be a string of the function name or a Closure (anonymous function). — The interface of a TAF user-defined callback function is as follows:
  ```php
  int userCallbackFn(resource $connection, int $event, int $type)
  ```

 — See the parameter description and an example on OCI8 Transparent Application Failover (TAF) Support page.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`oci_unregister_taf_callback()`
