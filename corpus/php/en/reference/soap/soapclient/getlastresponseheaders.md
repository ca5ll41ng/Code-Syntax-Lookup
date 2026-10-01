---
id: "en-php-function-soapclient-getlastresponseheaders"
language: "php"
lang: "en"
category: "function"
name: "SoapClient::__getLastResponseHeaders"
title: "Returns the SOAP headers from the last response"
signature: "public string|null SoapClient::__getLastResponseHeaders()"
module: "soap"
source_url: "https://www.php.net/manual/en/soapclient.getlastresponseheaders.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the SOAP headers from the last response

## Description

```php
public string|null SoapClient::__getLastResponseHeaders()
```

Returns the SOAP headers from the last response.

> This function only works if the `SoapClient` object was created with the `trace` option set to `true`.

## Parameters

This function has no parameters.

## Return Values

The last SOAP response headers.

## Examples

**SoapClient::__getLastResponse() example**

```php


<?php
$client = new SoapClient("some.wsdl", array('trace' => 1));
$result = $client->SomeFunction();
echo "RESPONSE HEADERS:\n" . $client->__getLastResponseHeaders() . "\n";
?>

    
```

## See Also

`SoapClient::__getLastRequestHeaders()` `SoapClient::__getLastRequest()` `SoapClient::__getLastResponse()`
