---
id: "en-php-function-simplexmlelement-xpath"
language: "php"
lang: "en"
category: "function"
name: "SimpleXMLElement::xpath"
title: "Runs XPath query on XML data"
signature: "public array|null|false SimpleXMLElement::xpath(string $expression)"
module: "simplexml"
source_url: "https://www.php.net/manual/en/simplexmlelement.xpath.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Runs XPath query on XML data

## Description

```php
public array|null|false SimpleXMLElement::xpath(string $expression)
```

The `xpath` method searches the SimpleXML node for children matching the XPath `$expression`.

## Parameters

- **`$expression`** — An XPath path

## Return Values

Returns an `array` of SimpleXMLElement objects on success; or `null` or `false` in case of an error.

As of PHP 8.5.0, if the XPath expression returns something other than a node set (e.g. a boolean or number), an `E_WARNING` is emitted and `false` is returned instead of silently returning an empty array.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | If the XPath expression returns something other than a node set, an `E_WARNING` is now emitted and `false` is returned. Previously, an empty array was returned silently. |

## Examples

**Xpath**

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
    echo '/a/b/c: ',$node,"\n";
}

/* Relative paths also work... */
$result = $xml->xpath('b/c');

foreach ($result as $node) {
    echo 'b/c: ',$node,"\n";
}
?>

    
```

The above example will output:

```text


/a/b/c: text
/a/b/c: stuff
b/c: text
b/c: stuff

    
```

Notice that the two results are equal.

## See Also

`SimpleXMLElement::registerXPathNamespace()` `SimpleXMLElement::getDocNamespaces()` `SimpleXMLElement::getNamespaces()` `simplexml.examples-basic`
