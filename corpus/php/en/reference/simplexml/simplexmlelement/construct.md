---
id: "en-php-function-simplexmlelement-construct"
language: "php"
lang: "en"
category: "function"
name: "SimpleXMLElement::__construct"
title: "Creates a new SimpleXMLElement object"
signature: "public SimpleXMLElement::__construct(string $data, int $options = 0, bool $dataIsURL = false, string $namespaceOrPrefix = \"\", bool $isPrefix = false)"
module: "simplexml"
source_url: "https://www.php.net/manual/en/simplexmlelement.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new SimpleXMLElement object

## Description

```php
public SimpleXMLElement::__construct(string $data, int $options = 0, bool $dataIsURL = false, string $namespaceOrPrefix = "", bool $isPrefix = false)
```

Creates a new `SimpleXMLElement` object.

## Parameters

- **`$data`** — A well-formed XML string or the path or URL to an XML document if `$dataIsURL` is `true`.
- **`$options`** — Optionally used to specify additional Libxml parameters, which affect reading of XML documents. Options which affect the output of XML documents (e.g. `LIBXML_NOEMPTYTAG`) are silently ignored.
  > It may be necessary to pass `LIBXML_PARSEHUGE` to be able to process deeply nested XML or very large text nodes.


- **`$dataIsURL`** — By default, `$dataIsURL` is `false`. Use `true` to specify that `$data` is a path or URL to an XML document instead of `string` data.
- **`$namespaceOrPrefix`** — Namespace prefix or URI.
- **`$isPrefix`** — `true` if `$namespaceOrPrefix` is a prefix, `false` if it's a URI; defaults to `false`.

## Errors/Exceptions

Produces an `E_WARNING` error message for each error found in the XML data and additionally throws an `Exception` if the XML data could not be parsed.

> Use `libxml_use_internal_errors()` to suppress all XML errors, and `libxml_get_errors()` to iterate over them afterwards.

## Examples

> Listed examples may include `examples/simplexml-data.php`, which refers to the XML string found in the first example of the basic usage guide.

**Create a SimpleXMLElement object**

```php


<?php

include 'examples/simplexml-data.php';

$sxe = new SimpleXMLElement($xmlstr);
echo $sxe->movie[0]->title;

?>

    
```

The above example will output:

```text


PHP: Behind the Parser

    
```

**Create a SimpleXMLElement object from a URL**

```php


<?php

$sxe = new SimpleXMLElement('http://example.org/document.xml', 0, true);
echo $sxe->asXML();

?>

    
```

## See Also

`simplexml.examples-basic` `simplexml_load_string()` `simplexml_load_file()` `simplexml.examples-errors` `libxml_use_internal_errors()` `libxml_set_streams_context()`
