---
id: "en-php-function-function-simplexml-load-string"
language: "php"
lang: "en"
category: "function"
name: "simplexml_load_string"
title: "Interprets a string of XML into an object"
signature: "SimpleXMLElement|false simplexml_load_string(string $data, string|null $class_name = SimpleXMLElement::class, int $options = 0, string $namespace_or_prefix = \"\", bool $is_prefix = false)"
module: "simplexml"
source_url: "https://www.php.net/manual/en/function.simplexml-load-string.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Interprets a string of XML into an object

## Description

```php
SimpleXMLElement|false simplexml_load_string(string $data, string|null $class_name = SimpleXMLElement::class, int $options = 0, string $namespace_or_prefix = "", bool $is_prefix = false)
```

Takes a well-formed XML string and returns it as an object.

## Parameters

- **`$data`** — A well-formed XML string
- **`$class_name`** — You may use this optional parameter so that `simplexml_load_string()` will return an object of the specified class. That class should extend the `SimpleXMLElement` class.
- **`$options`** — Bitwise `OR` of the libxml option constants.
- **`$namespace_or_prefix`** — Namespace prefix or URI.
- **`$is_prefix`** — `true` if `$namespace_or_prefix` is a prefix, `false` if it's a URI; defaults to `false`.

## Return Values

Returns an `object` of class `SimpleXMLElement` with properties containing the data held within the xml document, or `false` on failure.

> This function may return Boolean `false`, but may also return a non-Boolean value which evaluates to `false`. Please read the section on Booleans for more information. Use the === operator for testing the return value of this function.

## Errors/Exceptions

 {{{ 

Produces an `E_WARNING` error message for each error found in the XML data.

> Use `libxml_use_internal_errors()` to suppress all XML errors, and `libxml_get_errors()` to iterate over them afterwards.

 }}} 

## Examples

**Interpret an XML string**

```php


<?php
$string = <<<XML
<?xml version='1.0'?> 
<document>
 <title>Forty What?</title>
 <from>Joe</from>
 <to>Jane</to>
 <body>
  I know that's the answer -- but what's the question?
 </body>
</document>
XML;

$xml = simplexml_load_string($string);

print_r($xml);
?>

    
```

The above example will output:

```text


SimpleXMLElement Object
(
    [title] => Forty What?
    [from] => Joe
    [to] => Jane
    [body] =>
  I know that's the answer -- but what's the question?

)

    
```

At this point, you can go about using `$xml->body` and such.

## See Also

`simplexml_load_file()` `SimpleXMLElement::__construct()` `simplexml.examples-errors` `libxml_use_internal_errors()` `simplexml.examples-basic`
