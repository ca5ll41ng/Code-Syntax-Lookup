---
id: "en-php-function-soapserver-getlastresponse"
language: "php"
lang: "en"
category: "function"
name: "SoapServer::__getLastResponse"
title: "Returns last SOAP response"
signature: "public string|null SoapServer::__getLastResponse()"
module: "soap"
source_url: "https://www.php.net/manual/en/soapserver.getlastresponse.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns last SOAP response

## Description

```php
public string|null SoapServer::__getLastResponse()
```

Returns the XML sent in the last SOAP response.

> This method works only if the `SoapServer` object was created with the `trace` option set to `true`.

## Parameters

This function has no parameters.

## Return Values

The last SOAP response, as an XML string.

## Examples

**SoapServer::__getLastResponse() example**

```php


<?php
$server = new SoapServer("some.wsdl", ["trace" => 1]);
$server->handle();
echo "Response:\n" . $server->__getLastResponse() . "\n";
?>

   
```
