---
id: "en-php-function-soapclient-setsoapheaders"
language: "php"
lang: "en"
category: "function"
name: "SoapClient::__setSoapHeaders"
title: "Sets SOAP headers for subsequent calls"
signature: "public bool SoapClient::__setSoapHeaders(SoapHeader|array|null $headers = null)"
module: "soap"
source_url: "https://www.php.net/manual/en/soapclient.setsoapheaders.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets SOAP headers for subsequent calls

## Description

```php
public bool SoapClient::__setSoapHeaders(SoapHeader|array|null $headers = null)
```

Defines headers to be sent along with the SOAP requests.

> Calling this method will replace any previous values.

## Parameters

- **`$headers`** — The headers to be set. It could be `SoapHeader` object or array of `SoapHeader` objects. If not specified or set to `null`, the headers will be deleted.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`SoapClient::__setSoapHeaders()` example**

```php


<?php

$client = new SoapClient(null, array('location' => "http://localhost/soap.php",
                                     'uri'      => "http://test-uri/"));
$header = new SoapHeader('http://soapinterop.org/echoheader/', 
                            'echoMeStringRequest',
                            'hello world');

$client->__setSoapHeaders($header);

$client->__soapCall("echoVoid", null);
?>

    
```

**Set Multiple Headers**

```php


<?php

$client = new SoapClient(null, array('location' => "http://localhost/soap.php",
                                     'uri'      => "http://test-uri/"));
$headers = array();

$headers[] = new SoapHeader('http://soapinterop.org/echoheader/', 
                            'echoMeStringRequest',
                            'hello world');

$headers[] = new SoapHeader('http://soapinterop.org/echoheader/', 
                            'echoMeStringRequest',
                            'hello world again');

$client->__setSoapHeaders($headers);

$client->__soapCall("echoVoid", null);
?>

      
```
