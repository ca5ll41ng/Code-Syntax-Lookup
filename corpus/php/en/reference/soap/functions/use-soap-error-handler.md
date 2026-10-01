---
id: "en-php-function-function-use-soap-error-handler"
language: "php"
lang: "en"
category: "function"
name: "use_soap_error_handler"
title: "Set whether to use the SOAP error handler"
signature: "bool use_soap_error_handler(bool $enable = true)"
module: "soap"
source_url: "https://www.php.net/manual/en/function.use-soap-error-handler.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set whether to use the SOAP error handler

## Description

```php
bool use_soap_error_handler(bool $enable = true)
```

This function sets whether or not to use the SOAP error handler in the SOAP server. It will return the previous value. If set to `true`, details of errors in a `SoapServer` application will be sent to the client as a SOAP fault message. If `false`, the standard PHP error handler is used. The default is to send error to the client as SOAP fault message.

## Parameters

- **`$enable`** — Set to `true` to send error details to clients.

## Return Values

Returns the original value.

## See Also

`set_error_handler()` `set_exception_handler()`
