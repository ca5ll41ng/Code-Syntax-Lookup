---
id: "en-php-function-soapvar-construct"
language: "php"
lang: "en"
category: "function"
name: "SoapVar::__construct"
title: "SoapVar constructor"
signature: "public SoapVar::__construct(mixed $data, int|null $encoding, string|null $typeName = null, string|null $typeNamespace = null, string|null $nodeName = null, string|null $nodeNamespace = null)"
module: "soap"
source_url: "https://www.php.net/manual/en/soapvar.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# SoapVar constructor

## Description

```php
public SoapVar::__construct(mixed $data, int|null $encoding, string|null $typeName = null, string|null $typeNamespace = null, string|null $nodeName = null, string|null $nodeNamespace = null)
```

Constructs a new `SoapVar` object.

## Parameters

- **`$data`** — The data to pass or return.
- **`$encoding`** — The encoding ID, one of the `XSD_...` constants.
- **`$type_name`** — The type name.
- **`$type_namespace`** — The type namespace.
- **`$node_name`** — The XML node name.
- **`$node_namespace`** — The XML node namespace.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | An instance of `DateTimeInterface` used as the value for an `xsd:dateTime` element, or a similar date and time type, is now serialized to its ISO 8601 representation, instead of being serialized as an empty string. |
| 8.0.3 | `$typeName`, `$typeNamespace`, `$nodeName`,and `$nodeNamespace` are nullable now. |

## Examples

**`SoapVar::__construct()` example**

```php


<?php
class SOAPStruct {
    function SOAPStruct($s, $i, $f)
    {
        $this->varString = $s;
        $this->varInt = $i;
        $this->varFloat = $f;
    }
}
$client = new SoapClient(null, array('location' => "http://localhost/soap.php",
                                     'uri'      => "http://test-uri/"));
$struct = new SOAPStruct('arg', 34, 325.325);
$soapstruct = new SoapVar($struct, SOAP_ENC_OBJECT, "SOAPStruct", "http://soapinterop.org/xsd");
$client->echoStruct(new SoapParam($soapstruct, "inputStruct"));
?>

    
```

## See Also

`SoapClient::__soapCall()` `SoapParam::__construct()`
