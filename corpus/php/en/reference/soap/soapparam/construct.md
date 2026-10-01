---
id: "en-php-function-soapparam-construct"
language: "php"
lang: "en"
category: "function"
name: "SoapParam::__construct"
title: "SoapParam constructor"
signature: "public SoapParam::__construct(mixed $data, string $name)"
module: "soap"
source_url: "https://www.php.net/manual/en/soapparam.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# SoapParam constructor

## Description

```php
public SoapParam::__construct(mixed $data, string $name)
```

Constructs a new `SoapParam` object.

## Parameters

- **`$data`** — The data to pass or return. This parameter can be passed directly as PHP value, but in this case it will be named as `paramN` and the SOAP service may not understand it.
- **`$name`** — The parameter name.

## Examples

**`SoapParam::__construct()` example**

```php


<?php
$client = new SoapClient(null,array('location' => "http://localhost/soap.php",
                                    'uri'      => "http://test-uri/"));
$client->SomeFunction(new SoapParam($a, "a"),
                      new SoapParam($b, "b"),
                      new SoapParam($c, "c"));
?>

    
```

## See Also

`SoapClient::__soapCall()` `SoapVar::__construct()`
