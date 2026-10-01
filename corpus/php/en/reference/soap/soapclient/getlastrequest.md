---
id: "en-php-function-soapclient-getlastrequest"
language: "php"
lang: "en"
category: "function"
name: "SoapClient::__getLastRequest"
title: "Returns last SOAP request"
signature: "public string|null SoapClient::__getLastRequest()"
module: "soap"
source_url: "https://www.php.net/manual/en/soapclient.getlastrequest.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns last SOAP request

## Description

```php
public string|null SoapClient::__getLastRequest()
```

Returns the XML sent in the last SOAP request.

> This method works only if the `SoapClient` object was created with the `trace` option set to `true`.

## Parameters

This function has no parameters.

## Return Values

The last SOAP request, as an XML string.

## Examples

**SoapClient::__getLastRequest() example**

```php


<?php
$client = new SoapClient("some.wsdl", array('trace' => 1));
$result = $client->SomeFunction();
echo "REQUEST:\n" . $client->__getLastRequest() . "\n";
?>

    
```

## See Also

`SoapClient::__getLastRequestHeaders()` `SoapClient::__getLastResponse()` `SoapClient::__getLastResponseHeaders()`
