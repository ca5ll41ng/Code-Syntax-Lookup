---
id: "en-php-function-soapfault-construct"
language: "php"
lang: "en"
category: "function"
name: "SoapFault::__construct"
title: "SoapFault constructor"
signature: "public SoapFault::__construct(array|string|null $code, string $string, string|null $actor = null, mixed $details = null, string|null $name = null, mixed $headerFault = null, string $lang = \"\")"
module: "soap"
source_url: "https://www.php.net/manual/en/soapfault.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# SoapFault constructor

## Description

```php
public SoapFault::__construct(array|string|null $code, string $string, string|null $actor = null, mixed $details = null, string|null $name = null, mixed $headerFault = null, string $lang = "")
```

This class is used to send SOAP fault responses from the PHP handler. `$code`, `$string`, `$actor` and `$details` are standard elements of a SOAP Fault.

## Parameters

- **`$code`** — The error code of the `SoapFault`.
- **`$string`** — The error message of the `SoapFault`.
- **`$actor`** — A string identifying the actor that caused the error.
- **`$details`** — More details about the cause of the error.
- **`$name`** — Can be used to select the proper fault encoding from WSDL.
- **`$headerFault`** — Can be used during SOAP header handling to report an error in the response header.
- **`$lang`** — The human language that the SoapFault is written in. This is only used for SOAP version 1.2.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | The optional parameter `$lang` has been added in order to be compliant with the SOAP 1.2 specification. |

## Examples

**Some examples**

```php


<?php
function test($x)
{
    return new SoapFault("Server", "Some error message");
}

$server = new SoapServer(null, array('uri' => "http://test-uri/"));
$server->addFunction("test");
$server->handle();
?>

    
```

It is possible to use PHP exception mechanism to throw SOAP Fault.

**Some examples**

```php


<?php
function test($x)
{
    throw new SoapFault("Server", "Some error message");
}

$server = new SoapServer(null, array('uri' => "http://test-uri/"));
$server->addFunction("test");
$server->handle();
?>

    
```

## See Also

`SoapServer::fault()` `is_soap_fault()`
