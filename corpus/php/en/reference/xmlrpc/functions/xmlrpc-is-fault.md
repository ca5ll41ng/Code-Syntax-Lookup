---
id: "en-php-function-function-xmlrpc-is-fault"
language: "php"
lang: "en"
category: "function"
name: "xmlrpc_is_fault"
title: "Determines if an array value represents an XMLRPC fault"
signature: "bool xmlrpc_is_fault(array $arg)"
module: "xmlrpc"
source_url: "https://www.php.net/manual/en/function.xmlrpc-is-fault.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Determines if an array value represents an XMLRPC fault

## Description

```php
bool xmlrpc_is_fault(array $arg)
```

> This function is *EXPERIMENTAL*. The behaviour of this function, its name, and surrounding documentation may change without notice in a future release of PHP. This function should be used at your own risk.

## Parameters

- **`$arg`** — Array returned by `xmlrpc_decode()`.

## Return Values

Returns `true` if the argument means fault, `false` otherwise. Fault description is available in `$arg["faultString"]`, fault code is in `$arg["faultCode"]`.

## Examples

See example by `xmlrpc_encode_request()`.

## See Also

`xmlrpc_decode()`
