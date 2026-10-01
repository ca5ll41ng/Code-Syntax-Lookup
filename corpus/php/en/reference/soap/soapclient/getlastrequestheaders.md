---
id: "en-php-function-soapclient-getlastrequestheaders"
language: "php"
lang: "en"
category: "function"
name: "SoapClient::__getLastRequestHeaders"
title: "Returns the SOAP headers from the last request"
signature: "public string|null SoapClient::__getLastRequestHeaders()"
module: "soap"
source_url: "https://www.php.net/manual/en/soapclient.getlastrequestheaders.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the SOAP headers from the last request

## Description

```php
public string|null SoapClient::__getLastRequestHeaders()
```

Returns the SOAP headers from the last request.

> This function only works if the `SoapClient` object was created with the `trace` option set to `true`.

## Parameters

This function has no parameters.

## Return Values

The last SOAP request headers.

## Examples

**SoapClient::__getLastRequestHeaders() example**

```php


<?php
$client = new SoapClient("some.wsdl", array('trace' => 1));
$result = $client->SomeFunction();
echo "REQUEST HEADERS:\n" . $client->__getLastRequestHeaders() . "\n";
?>

    
```

## See Also

`SoapClient::__getLastResponseHeaders()` `SoapClient::__getLastRequest()` `SoapClient::__getLastResponse()`
