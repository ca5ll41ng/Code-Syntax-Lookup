---
id: "en-php-function-soapserver-setclass"
language: "php"
lang: "en"
category: "function"
name: "SoapServer::setClass"
title: "Sets the class which handles SOAP requests"
signature: "public void SoapServer::setClass(string $class, mixed $args)"
module: "soap"
source_url: "https://www.php.net/manual/en/soapserver.setclass.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the class which handles SOAP requests

## Description

```php
public void SoapServer::setClass(string $class, mixed $args)
```

Exports all methods from specified class.

The object can be made persistent across request for a given PHP session with the `SoapServer::setPersistence()` method.

## Parameters

- **`$class`** — The name of the exported class.
- **`$args`** — These optional parameters will be passed to the default class constructor during object creation.

## Return Values

No value is returned.

## See Also

`SoapServer::__construct()` `SoapServer::addFunction()` `SoapServer::setPersistence()`
