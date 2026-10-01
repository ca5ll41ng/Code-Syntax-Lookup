---
id: "en-php-function-soapclient-call"
language: "php"
lang: "en"
category: "function"
name: "SoapClient::__call"
title: "Calls a SOAP function (deprecated)"
signature: "public mixed SoapClient::__call(string $name, array $args)"
module: "soap"
source_url: "https://www.php.net/manual/en/soapclient.call.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Calls a SOAP function (deprecated)

## Description

```php
public mixed SoapClient::__call(string $name, array $args)
```

Calling this method directly is deprecated. Usually, SOAP functions can be called as methods of the `SoapClient` object; in situations where this is not possible or additional options are needed, use `SoapClient::__soapCall()`.

## Parameters

- **`$name`** — The name of the SOAP function to call.
- **`$args`** — An array of the arguments to pass to the function. This can be either an ordered or an associative array. Note that most SOAP servers require parameter names to be provided, in which case this must be an associative array.

## Return Values

SOAP functions may return one, or multiple values. If only one value is returned by the SOAP function, the return value will be a scalar. If multiple values are returned, an associative array of named output parameters is returned instead.

On error, if the `SoapClient` object was constructed with the `exceptions` option set to `false`, a `SoapFault` object will be returned.
