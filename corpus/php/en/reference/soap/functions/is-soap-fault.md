---
id: "en-php-function-function-is-soap-fault"
language: "php"
lang: "en"
category: "function"
name: "is_soap_fault"
title: "Checks if a SOAP call has failed"
signature: "bool is_soap_fault(mixed $object)"
module: "soap"
source_url: "https://www.php.net/manual/en/function.is-soap-fault.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if a SOAP call has failed

## Description

```php
bool is_soap_fault(mixed $object)
```

This function is useful to check if the SOAP call failed, but without using exceptions. To use it, create a `SoapClient` object with the `exceptions` option set to zero or `false`. In this case, the SOAP method will return a special `SoapFault` object which encapsulates the fault details (faultcode, faultstring, faultactor and faultdetails).

If `exceptions` is not set then SOAP call will throw an exception on error. `is_soap_fault()` checks if the given parameter is a `SoapFault` object.

## Parameters

- **`$object`** — The object to test.

## Return Values

 See also Returns <constant>true</constant> on success or <constant>false</constant> on failure. 

This will return `true` on error, and `false` otherwise.

## Examples

**`is_soap_fault()` example**

```php


<?php
$client = new SoapClient("some.wsdl", array('exceptions' => 0));
$result = $client->SomeFunction();
if (is_soap_fault($result)) {
    trigger_error("SOAP Fault: (faultcode: {$result->faultcode}, faultstring: {$result->faultstring})", E_USER_ERROR);
}
?>

    
```

**SOAP's standard method for error reporting is exceptions**

```php


<?php
try {
    $client = new SoapClient("some.wsdl");
    $result = $client->SomeFunction(/* ... */);
} catch (SoapFault $fault) {
    trigger_error("SOAP Fault: (faultcode: {$fault->faultcode}, faultstring: {$fault->faultstring})", E_USER_ERROR);
}
?>

    
```

## See Also

`SoapClient::__construct()` `SoapFault::__construct()`
