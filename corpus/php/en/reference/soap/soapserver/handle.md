---
id: "en-php-function-soapserver-handle"
language: "php"
lang: "en"
category: "function"
name: "SoapServer::handle"
title: "Handles a SOAP request"
signature: "public void SoapServer::handle(string|null $request = null)"
module: "soap"
source_url: "https://www.php.net/manual/en/soapserver.handle.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Handles a SOAP request

## Description

```php
public void SoapServer::handle(string|null $request = null)
```

Processes a SOAP request, calls necessary functions, and sends a response back.

## Parameters

- **`$request`** — The SOAP request. If this argument is omitted, the request is assumed to be in the raw POST data of the HTTP request.

## Return Values

No value is returned.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$request` is now nullable. |

## Examples

**`SoapServer::handle()` example**

```php


<?php
function test($x)
{
    return $x;
}

$server = new SoapServer(null, array('uri' => "http://test-uri/"));
$server->addFunction("test");
$server->handle();
?>

    
```

## See Also

`SoapServer::__construct()`
