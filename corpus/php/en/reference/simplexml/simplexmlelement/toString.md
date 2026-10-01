---
id: "en-php-function-simplexmlelement-tostring"
language: "php"
lang: "en"
category: "function"
name: "SimpleXMLElement::__toString"
title: "Returns the string content"
signature: "public string SimpleXMLElement::__toString()"
module: "simplexml"
source_url: "https://www.php.net/manual/en/simplexmlelement.tostring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the string content

## Description

```php
public string SimpleXMLElement::__toString()
```

Returns text content that is directly in this element. Does not return text content that is inside this element's children.

## Parameters

This function has no parameters.

## Return Values

Returns the string content on success or an empty string on failure.

## Examples

**Get string content**

```php


<?php
$xml = new SimpleXMLElement('<a>1 <b>2 </b>3</a>');
echo $xml;
?>

    
```

The above example will output:

```text


1 3

    
```

## See Also

`SimpleXMLElement::asXML()`
