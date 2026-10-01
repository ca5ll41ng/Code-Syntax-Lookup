---
id: "en-php-function-soapclient-setcookie"
language: "php"
lang: "en"
category: "function"
name: "SoapClient::__setCookie"
title: "Defines a cookie for SOAP requests"
signature: "public void SoapClient::__setCookie(string $name, string|null $value = null)"
module: "soap"
source_url: "https://www.php.net/manual/en/soapclient.setcookie.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Defines a cookie for SOAP requests

## Description

```php
public void SoapClient::__setCookie(string $name, string|null $value = null)
```

Defines a cookie to be sent along with the SOAP requests.

> Calling this method will affect all following calls to `SoapClient` methods.

## Parameters

- **`$name`** — The name of the cookie.
- **`$value`** — The value of the cookie. If not specified, the cookie will be deleted.

## Return Values

No value is returned.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$value` is now nullable. |
