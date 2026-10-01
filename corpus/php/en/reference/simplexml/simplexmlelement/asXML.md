---
id: "en-php-function-simplexmlelement-asxml"
language: "php"
lang: "en"
category: "function"
name: "SimpleXMLElement::asXML"
title: "Return a well-formed XML string based on SimpleXML element"
signature: "public string|bool SimpleXMLElement::asXML(string|null $filename = null)"
module: "simplexml"
source_url: "https://www.php.net/manual/en/simplexmlelement.asxml.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return a well-formed XML string based on SimpleXML element

## Description

```php
public string|bool SimpleXMLElement::asXML(string|null $filename = null)
```

The `asXML` method formats the parent object's data in XML version 1.0.

## Parameters

- **`$filename`** — If a `string` value is provided, the function writes the data to the file rather than returning it.

## Return Values

If the `$filename` isn't specified, this function returns a `string` on success and `false` on error. If the parameter is specified, it returns `true` if the file was written successfully and `false` otherwise.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$filename` is nullable now. |

## Examples

**Get XML**

```php


<?php
$string = <<<XML
<a>
 <b>
  <c>text</c>
  <c>stuff</c>
 </b>
 <d>
  <c>code</c>
 </d>
</a>
XML;

$xml = new SimpleXMLElement($string);

echo $xml->asXML();

?>

    
```

The above example will output:

```text


<?xml version="1.0"?>
<a>
 <b>
  <c>text</c>
  <c>stuff</c>
 </b>
 <d>
  <c>code</c>
 </d>
</a>

    
```

`asXML` also works on Xpath results:

**Using asXML() on `SimpleXMLElement::xpath()` results**

```php


<?php
$string = <<<XML
<a>
 <b>
  <c>text</c>
  <c>stuff</c>
 </b>
 <d>
  <c>code</c>
 </d>
</a>
XML;

$xml = new SimpleXMLElement($string);

/* Search for <a><b><c> */
$result = $xml->xpath('/a/b/c');

foreach ($result as $node) {
    echo $node->asXML();
}
?>

    
```

The above example will output:

```text


<c>text</c><c>stuff</c>

    
```

## See Also

`SimpleXMLElement::__toString()` `simplexml.examples-basic`
