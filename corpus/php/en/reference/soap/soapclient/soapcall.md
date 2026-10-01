---
id: "en-php-function-soapclient-soapcall"
language: "php"
lang: "en"
category: "function"
name: "SoapClient::__soapCall"
title: "Calls a SOAP function"
signature: "public mixed SoapClient::__soapCall(string $name, array $args, array|null $options = null, SoapHeader|array|null $inputHeaders = null, array $outputHeaders = null)"
module: "soap"
source_url: "https://www.php.net/manual/en/soapclient.soapcall.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Calls a SOAP function

## Description

```php
public mixed SoapClient::__soapCall(string $name, array $args, array|null $options = null, SoapHeader|array|null $inputHeaders = null, array $outputHeaders = null)
```

This is a low level API function that is used to make a SOAP call. Usually, in WSDL mode, SOAP functions can be called as methods of the `SoapClient` object. This method is useful in non-WSDL mode when `soapaction` is unknown, `uri` differs from the default or when sending and/or receiving SOAP Headers.

On error, a call to a SOAP function can cause PHP to throw exceptions or return a `SoapFault` object if exceptions are disabled. To check if the function call failed to catch the SoapFault exceptions, check the result with `is_soap_fault()`.

## Parameters

- **`$name`** — The name of the SOAP function to call.
- **`$args`** — An array of the arguments to pass to the function. This can be either an ordered or an associative array. Note that most SOAP servers require parameter names to be provided, in which case this must be an associative array.
- **`$options`** — An associative array of options to pass to the client. — The `location` option is the URL of the remote Web service. — The `uri` option is the target namespace of the SOAP service. — The `soapaction` option is the action to call.
- **`$inputHeaders`** — An array of headers to be sent along with the SOAP request.
- **`$outputHeaders`** — If supplied, this array will be filled with the headers from the SOAP response.

## Return Values

SOAP functions may return one, or multiple values. If only one value is returned by the SOAP function, the return value will be a scalar. If multiple values are returned, an associative array of named output parameters is returned instead.

On error, if the `SoapClient` object was constructed with the `exceptions` option set to `false`, a `SoapFault` object will be returned.

## Examples

**`SoapClient::__soapCall()` example**

```php


<?php

$client = new SoapClient("some.wsdl");
$client->SomeFunction($a, $b, $c);

$client->__soapCall("SomeFunction", array($a, $b, $c));
$client->__soapCall("SomeFunction", array($a, $b, $c), NULL,
                    new SoapHeader(), $output_headers);


$client = new SoapClient(null, array('location' => "http://localhost/soap.php",
                                     'uri'      => "http://test-uri/"));
$client->SomeFunction($a, $b, $c);
$client->__soapCall("SomeFunction", array($a, $b, $c));
$client->__soapCall("SomeFunction", array($a, $b, $c),
                    array('soapaction' => 'some_action',
                          'uri'        => 'some_uri'));
?>

    
```

## See Also

`SoapClient::__construct()` `SoapParam::__construct()` `SoapVar::__construct()` `SoapHeader::__construct()` `SoapFault::__construct()` `is_soap_fault()`
