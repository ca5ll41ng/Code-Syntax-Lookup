---
id: "en-php-function-soapheader-construct"
language: "php"
lang: "en"
category: "function"
name: "SoapHeader::__construct"
title: "SoapHeader constructor"
signature: "public SoapHeader::__construct(string $namespace, string $name, [mixed $data = ...], [bool $mustunderstand = ...], [string $actor = ...])"
module: "soap"
source_url: "https://www.php.net/manual/en/soapheader.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# SoapHeader constructor

## Description

```php
public SoapHeader::__construct(string $namespace, string $name, [mixed $data = ...], [bool $mustunderstand = ...], [string $actor = ...])
```

Constructs a new SoapHeader object.

## Parameters

- **`$namespace`** — The namespace of the SOAP header element.
- **`$name`** — The name of the SoapHeader object.
- **`$data`** — A SOAP header's content. It can be a PHP value or a `SoapVar` object.
- **`$mustUnderstand`** — Value of the `mustUnderstand` attribute of the SOAP header element.
- **`$actor`** — Value of the `actor` attribute of the SOAP header element.

## Examples

**`SoapHeader::__construct()` example**

```php


<?php
$client = new SoapClient(null, array('location' => "http://localhost/soap.php",
                                     'uri'      => "http://test-uri/"));
$client->__soapCall("echoVoid", null, null,
                new SoapHeader('http://soapinterop.org/echoheader/',
                               'echoMeStringRequest',
                               'hello world'));
?>

    
```

## See Also

`SoapClient::__soapCall()` `SoapVar::__construct()` `SoapParam::__construct()` `SoapServer::addSoapHeader()`
