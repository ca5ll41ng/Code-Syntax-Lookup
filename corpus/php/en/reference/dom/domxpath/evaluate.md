---
id: "en-php-function-domxpath-evaluate"
language: "php"
lang: "en"
category: "function"
name: "DOMXPath::evaluate"
title: "Evaluates the given XPath expression and returns a typed result if possible"
signature: "public mixed DOMXPath::evaluate(string $expression, DOMNode|null $contextNode = null, bool $registerNodeNS = true)"
module: "dom"
source_url: "https://www.php.net/manual/en/domxpath.evaluate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Evaluates the given XPath expression and returns a typed result if possible

## Description

```php
public mixed DOMXPath::evaluate(string $expression, DOMNode|null $contextNode = null, bool $registerNodeNS = true)
```

Executes the given XPath `$expression` and returns a typed result if possible.

## Parameters

- **`$expression`** — The XPath expression to execute.
- **`$contextNode`** — The optional `$contextNode` can be specified for doing relative XPath queries. By default, the queries are relative to the root element.
- **`$registerNodeNS`** — Whether to automatically register the in-scope namespace prefixes of the context node to the `DOMXPath` object. This can be used to avoid needing to call `DOMXPath::registerNamespace()` manually for each in-scope namespaces. When a namespace prefix conflict exists, only the nearest descendant namespace prefix is registered.



## Return Values

Returns a typed result if possible or a `DOMNodeList` containing all nodes matching the given XPath `$expression`.

If the `$expression` is malformed or the `$contextNode` is invalid, `DOMXPath::evaluate()` returns `false`.

## Examples

**Getting the count of all the english books**

```php


<?php

$doc = new DOMDocument;

$doc->load('examples/book-dcobook.xml');

$xpath = new DOMXPath($doc);

$tbody = $doc->getElementsByTagName('tbody')->item(0);

// our query is relative to the tbody node
$query = 'count(row/entry[. = "en"])';

$entries = $xpath->evaluate($query, $tbody);
echo "There are $entries english books\n";

?>

    
```

The above example will output:

```text


There are 2 english books

    
```

## See Also

`DOMXPath::query()`
