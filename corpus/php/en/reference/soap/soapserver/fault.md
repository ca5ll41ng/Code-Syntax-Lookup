---
id: "en-php-function-soapserver-fault"
language: "php"
lang: "en"
category: "function"
name: "SoapServer::fault"
title: "Issue SoapServer fault indicating an error"
signature: "public void SoapServer::fault(string $code, string $string, string $actor = \"\", mixed $details = null, string $name = \"\", string $lang = \"\")"
module: "soap"
source_url: "https://www.php.net/manual/en/soapserver.fault.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Issue SoapServer fault indicating an error

## Description

```php
public void SoapServer::fault(string $code, string $string, string $actor = "", mixed $details = null, string $name = "", string $lang = "")
```

Sends a response to the client of the current request indicating an error.

> This can only be called when handling a request.

## Parameters

- **`$code`** — The error code to return
- **`$string`** — A brief description of the error
- **`$actor`** — A string identifying the actor that caused the fault.
- **`$details`** — More details of the fault
- **`$name`** — The name of the fault. This can be used to select a name from a WSDL file.
- **`$lang`** — The human language that the SoapFault is written in. This is only used for SOAP version 1.2.

## Return Values

No value is returned.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | The optional parameter `$lang` has been added in order to be compliant with the SOAP 1.2 specification. |

## See Also

`SoapFault::__construct()`
