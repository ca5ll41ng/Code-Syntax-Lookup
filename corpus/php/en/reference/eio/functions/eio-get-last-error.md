---
id: "en-php-function-function-eio-get-last-error"
language: "php"
lang: "en"
category: "function"
name: "eio_get_last_error"
title: "Returns string describing the last error associated with a request resource"
signature: "string eio_get_last_error(resource $req)"
module: "eio"
source_url: "https://www.php.net/manual/en/function.eio-get-last-error.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns string describing the last error associated with a request resource

## Description

```php
string eio_get_last_error(resource $req)
```

`eio_get_last_error()` returns string describing the last error associated with `$req`.

## Parameters

- **`$req`** — The request resource.

## Return Values

`eio_get_last_error()` returns string describing the last error associated with the request resource specified by `$req`.

> This function is *EXPERIMENTAL*. The behaviour of this function, its name, and surrounding documentation may change without notice in a future release of PHP. This function should be used at your own risk.
