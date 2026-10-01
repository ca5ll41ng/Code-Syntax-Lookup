---
id: "en-php-function-soapclient-dorequest"
language: "php"
lang: "en"
category: "function"
name: "SoapClient::__doRequest"
title: "Performs a SOAP request"
signature: "public string|null SoapClient::__doRequest(string $request, string $location, string $action, int $version, bool $oneWay = false, string|null $uriParserClass = null)"
module: "soap"
source_url: "https://www.php.net/manual/en/soapclient.dorequest.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Performs a SOAP request

## Description

```php
public string|null SoapClient::__doRequest(string $request, string $location, string $action, int $version, bool $oneWay = false, string|null $uriParserClass = null)
```

Performs SOAP request over HTTP.

This method can be overridden in subclasses to implement different transport layers, perform additional XML processing or other purpose.

## Parameters

- **`$request`** — The XML SOAP request.
- **`$location`** — The URL to request.
- **`$action`** — The SOAP action.
- **`$version`** — The SOAP version.
- **`$oneWay`** — If `$oneWay` is set to `true`, this method returns nothing. Use this where a response is not expected.
- **`$uriParserClass`** — The classname to use for parsing the redirection URI when a `"Location"` header is received in the response, or `null` to use the default, `parse_url()` based parsing.

## Return Values

The XML SOAP response.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | The optional parameter `$uriParserClass` has been added. |
| 8.0.0 | The type of `$oneWay` is `boolean` now; formerly it was `integer`. |

## Examples

**`SoapClient::__doRequest()` example**

```php


<?php

function Add($x, $y)
{
    return $x + $y;
}

class LocalSoapClient extends SoapClient
{
    private $server;

    public function __construct($wsdl, $options)
    {
        parent::__construct($wsdl, $options);
        $this->server = new SoapServer($wsdl, $options);
        $this->server->addFunction('Add');
    }

    public function __doRequest(
        $request,
        $location,
        $action,
        $version,
        $one_way = false,
    ): ?string {
        ob_start();
        $this->server->handle($request);
        $response = ob_get_contents();
        ob_end_clean();

        return $response;
    }
}

$x = new LocalSoapClient(
    null,
    [
        'location' => 'test://',
        'uri' => 'http://testuri.org',
    ]
);

var_dump($x->Add(3, 4));

?>

    
```
