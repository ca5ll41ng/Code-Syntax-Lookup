---
id: "en-php-function-function-simplexml-load-file"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]}
name: "simplexml_load_file"
title: "Interprets an XML file into an object"
signature: "SimpleXMLElement|false simplexml_load_file(string $filename, string|null $class_name = SimpleXMLElement::class, int $options = 0, string $namespace_or_prefix = \"\", bool $is_prefix = false)"
module: "simplexml"
source_url: "https://www.php.net/manual/en/function.simplexml-load-file.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Interprets an XML file into an object

## Description

```php
SimpleXMLElement|false simplexml_load_file(string $filename, string|null $class_name = SimpleXMLElement::class, int $options = 0, string $namespace_or_prefix = "", bool $is_prefix = false)
```

Convert the well-formed XML document in the given file to an object.

## Parameters

- **`$filename`** — Path to the XML file
- **`$class_name`** — You may use this optional parameter so that `simplexml_load_file()` will return an object of the specified class. That class should extend the `SimpleXMLElement` class.
- **`$options`** — Bitwise `OR` of the libxml option constants.
- **`$namespace_or_prefix`** — Namespace prefix or URI.
- **`$is_prefix`** — `true` if `$namespace_or_prefix` is a prefix, `false` if it's a URI; defaults to `false`.

## Return Values

Returns an `object` of class `SimpleXMLElement` with properties containing the data held within the XML document, or `false` on failure.

> This function may return Boolean `false`, but may also return a non-Boolean value which evaluates to `false`. Please read the section on Booleans for more information. Use the === operator for testing the return value of this function.

## Errors/Exceptions

 {{{ 

Produces an `E_WARNING` error message for each error found in the XML data.

> Use `libxml_use_internal_errors()` to suppress all XML errors, and `libxml_get_errors()` to iterate over them afterwards.

 }}} 

## Examples

**Interpret an XML document**

```php


<?php
// The file examples/book.xml contains an XML document with a root element
// and at least an element /[root]/title.

if (file_exists('examples/book.xml')) {
    $xml = simplexml_load_file('examples/book.xml');
 
    print_r($xml);
} else {
    exit('Failed to open examples/book.xml.');
}
?>

    
```

This script will display, on success:

```text


SimpleXMLElement Object
(
  [book] => Array
  ...
)

    
```

At this point, you can go about using `$xml->title` and any other elements.

## See Also

`simplexml_load_string()` `SimpleXMLElement::__construct()` `simplexml.examples-errors` `libxml_use_internal_errors()` `simplexml.examples-basic` `libxml_set_streams_context()`
