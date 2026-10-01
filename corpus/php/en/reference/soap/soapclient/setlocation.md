---
id: "en-php-function-soapclient-setlocation"
language: "php"
lang: "en"
category: "function"
name: "SoapClient::__setLocation"
title: "Sets the location of the Web service to use"
signature: "public string|null SoapClient::__setLocation(string|null $location = null)"
module: "soap"
source_url: "https://www.php.net/manual/en/soapclient.setlocation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the location of the Web service to use

## Description

```php
public string|null SoapClient::__setLocation(string|null $location = null)
```

Sets the endpoint URL that will be touched by following SOAP requests. This is equivalent to specifying the `location` option when constructing the SoapClient.

> Calling this method is optional. The SoapClient uses the endpoint from the WSDL file by default.

## Parameters

- **`$location`** — The new endpoint URL.

## Return Values

The old endpoint URL.

## Changelog

|  |  |
| --- | --- |
| 8.0.3 | `$location` is nullable now. |

## Examples

**`SoapClient::__setLocation()` example**

```php


<?php
$client = new SoapClient('http://example.com/webservice.php?wsdl');

$client->__setLocation('http://www.somethirdparty.com');

$old_location = $client->__setLocation(); // unsets the location option

echo $old_location;

?>

    
```

The above example will output something similar to:

```text


http://www.somethirdparty.com

    
```

## See Also

`SoapClient::__construct()`
