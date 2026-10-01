---
id: "en-php-function-domxpath-query"
language: "php"
lang: "en"
category: "function"
name: "DOMXPath::query"
title: "Evaluates the given XPath expression"
signature: "public mixed DOMXPath::query(string $expression, DOMNode|null $contextNode = null, bool $registerNodeNS = true)"
module: "dom"
source_url: "https://www.php.net/manual/en/domxpath.query.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Evaluates the given XPath expression

## Description

```php
public mixed DOMXPath::query(string $expression, DOMNode|null $contextNode = null, bool $registerNodeNS = true)
```

Executes the given XPath `$expression`.

## Parameters

- **`$expression`** — The XPath expression to execute.
- **`$contextNode`** — The optional `$contextNode` can be specified for doing relative XPath queries. By default, the queries are relative to the root element.
- **`$registerNodeNS`** — Whether to automatically register the in-scope namespace prefixes of the context node to the `DOMXPath` object. This can be used to avoid needing to call `DOMXPath::registerNamespace()` manually for each in-scope namespaces. When a namespace prefix conflict exists, only the nearest descendant namespace prefix is registered.

## Return Values

Returns a `DOMNodeList` containing all nodes matching the given XPath `$expression`. Any expression which does not return nodes will return an empty `DOMNodeList`.

If the `$expression` is malformed or the `$contextNode` is invalid, `DOMXPath::query()` returns `false`.

## Errors/Exceptions

The following errors are possible when using an expression that invokes PHP callbacks.

- Throws an Error if a PHP callback is invoked but there were no callbacks registered, or if the named callback was not registered.
- Throws a TypeError if the `php:function` syntax is used and the handler name is not a string.
- Throws an Error if a non-DOM object was returned from a callback.

## Examples

**Getting all the english books**

```php


<?php

$doc = new DOMDocument;

// We don't want to bother with white spaces
$doc->preserveWhiteSpace = false;

$doc->load('examples/book-docbook.xml');

$xpath = new DOMXPath($doc);

// We start from the root element
$query = '//book/chapter/para/informaltable/tgroup/tbody/row/entry[. = "en"]';

$entries = $xpath->query($query);

foreach ($entries as $entry) {
    echo "Found {$entry->previousSibling->previousSibling->nodeValue}," .
         " by {$entry->previousSibling->nodeValue}\n";
}
?>

    
```

The above example will output:

```text


Found The Grapes of Wrath, by John Steinbeck
Found The Pearl, by John Steinbeck

    
```

We can also use the `$contextNode` parameter to shorten our expression:

```php


<?php

$doc = new DOMDocument;
$doc->preserveWhiteSpace = false;

$doc->load('examples/book-docbook.xml');

$xpath = new DOMXPath($doc);

$tbody = $doc->getElementsByTagName('tbody')->item(0);

// our query is relative to the tbody node
$query = 'row/entry[. = "en"]';

$entries = $xpath->query($query, $tbody);

foreach ($entries as $entry) {
    echo "Found {$entry->previousSibling->previousSibling->nodeValue}," .
         " by {$entry->previousSibling->nodeValue}\n";
}
?>

    
```

## See Also

`DOMXPath::evaluate()`
