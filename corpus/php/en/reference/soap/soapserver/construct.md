---
id: "en-php-function-soapserver-construct"
language: "php"
lang: "en"
category: "function"
name: "SoapServer::__construct"
title: "SoapServer constructor"
signature: "public SoapServer::__construct(string|null $wsdl, array $options = [])"
module: "soap"
source_url: "https://www.php.net/manual/en/soapserver.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# SoapServer constructor

## Description

```php
public SoapServer::__construct(string|null $wsdl, array $options = [])
```

This constructor allows the creation of `SoapServer` objects in WSDL or non-WSDL mode.

## Parameters

- **`$wsdl`** — To use the SoapServer in WSDL mode, pass the URI of a WSDL file. Otherwise, pass `null` and set the `uri` option to the target namespace for the server.
- **`$options`** — Allow setting a default SOAP version (`soap_version`), internal character encoding (`encoding`), and actor URI (`actor`). — The `classmap` option can be used to map some WSDL types to PHP classes. This option must be an array with WSDL types as keys and names of PHP classes as values. As of PHP 8.4.0, keys may also be specified using Clark notation, in the form `{namespace}type`, to map a type from a specific XML namespace, for example `'{http://example.com}foo'`. — The `typemap` option is an array of type mappings. Type mapping is an array with keys `type_name`, `type_ns` (namespace URI), `from_xml` (callback accepting one string parameter) and `to_xml` (callback accepting one object parameter). — The `cache_wsdl` option is one of `WSDL_CACHE_NONE`, `WSDL_CACHE_DISK`, `WSDL_CACHE_MEMORY` or `WSDL_CACHE_BOTH`. — There is also a `features` option which can be set to `SOAP_WAIT_ONE_WAY_CALLS`, `SOAP_SINGLE_ELEMENT_ARRAYS`, `SOAP_USE_XSI_ARRAY_TYPE`. — The `send_errors` option can be set to `false` to sent a generic error message ("Internal error") instead of the specific error message sent otherwise.

## Examples

**`SoapServer::__construct()` example**

```php


<?php

$server = new SoapServer("some.wsdl");

$server = new SoapServer("some.wsdl", array('soap_version' => SOAP_1_2));

$server = new SoapServer("some.wsdl", array('actor' => "http://example.org/ts-tests/C"));

$server = new SoapServer("some.wsdl", array('encoding'=>'ISO-8859-1'));

$server = new SoapServer(null, array('uri' => "http://test-uri/"));

class MyBook {
    public $title;
    public $author;
}

$server = new SoapServer("books.wsdl", array('classmap' => array('book' => "MyBook")));

?>

    
```

## See Also

`SoapClient::__construct()`
