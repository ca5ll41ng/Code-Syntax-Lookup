---
id: "en-php-function-soapserver-getfunctions"
language: "php"
lang: "en"
category: "function"
name: "SoapServer::getFunctions"
title: "Returns list of defined functions"
signature: "public array SoapServer::getFunctions()"
module: "soap"
source_url: "https://www.php.net/manual/en/soapserver.getfunctions.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns list of defined functions

## Description

```php
public array SoapServer::getFunctions()
```

Returns a list of the defined functions in the SoapServer object. This method returns the list of all functions added by `SoapServer::addFunction()` or `SoapServer::setClass()`.

## Parameters

This function has no parameters.

## Return Values

An `array` of the defined functions.

## Examples

**`SoapServer::getFunctions()` example**

```php


<?php
$server = new SoapServer(NULL, array("uri" => "http://test-uri"));
$server->addFunction(SOAP_FUNCTIONS_ALL);
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $server->handle();
} else {
  echo "This SOAP server can handle following functions: ";
  $functions = $server->getFunctions();
  foreach($functions as $func) {
    echo $func . "\n";
  }
}
?>

    
```

## See Also

`SoapServer::__construct()` `SoapServer::addFunction()` `SoapServer::setClass()`
