---
id: "en-php-function-soapserver-setobject"
language: "php"
lang: "en"
category: "function"
name: "SoapServer::setObject"
title: "Sets the object which will be used to handle SOAP requests"
signature: "public void SoapServer::setObject(object $object)"
module: "soap"
source_url: "https://www.php.net/manual/en/soapserver.setobject.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the object which will be used to handle SOAP requests

## Description

```php
public void SoapServer::setObject(object $object)
```

This sets a specific object as the handler for SOAP requests, rather than just a class as in `SoapServer::setClass()`.

## Parameters

- **`$object`** — The object to handle the requests.

## Return Values

No value is returned.

## See Also

`SoapServer::setClass()`
