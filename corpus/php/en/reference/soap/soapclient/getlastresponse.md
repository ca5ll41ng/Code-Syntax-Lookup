---
id: "en-php-function-soapclient-getlastresponse"
language: "php"
lang: "en"
category: "function"
name: "SoapClient::__getLastResponse"
title: "Returns last SOAP response"
signature: "public string|null SoapClient::__getLastResponse()"
module: "soap"
source_url: "https://www.php.net/manual/en/soapclient.getlastresponse.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns last SOAP response

## Description

```php
public string|null SoapClient::__getLastResponse()
```

Returns the XML received in the last SOAP response.

> This method works only if the `SoapClient` object was created with the `trace` option set to `true`.

## Parameters

This function has no parameters.

## Return Values

The last SOAP response, as an XML string.

## Examples

**SoapClient::__getLastResponse() example**

```php


<?php
$client = new SoapClient("some.wsdl", array('trace' => 1));
$result = $client->SomeFunction();
echo "Response:\n" . $client->__getLastResponse() . "\n";
?>

    
```

## See Also

`SoapClient::__getLastResponseHeaders()` `SoapClient::__getLastRequest()` `SoapClient::__getLastRequestHeaders()`
