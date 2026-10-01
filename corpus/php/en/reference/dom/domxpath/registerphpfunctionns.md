---
id: "en-php-function-domxpath-registerphpfunctionns"
language: "php"
lang: "en"
category: "function"
name: "DOMXPath::registerPhpFunctionNS"
title: "Register a PHP functions as namespaced XPath function"
signature: "public void DOMXPath::registerPhpFunctionNS(string $namespaceURI, string $name, callable $callable)"
module: "dom"
source_url: "https://www.php.net/manual/en/domxpath.registerphpfunctionns.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Register a PHP functions as namespaced XPath function

## Description

```php
public void DOMXPath::registerPhpFunctionNS(string $namespaceURI, string $name, callable $callable)
```

This method enables the ability to use a PHP function as a namespaced XPath function inside XPath expressions.

## Parameters

- **`$namespaceURI`** — The URI of the namespace.
- **`$name`** — The local function name inside the namespace.
- **`$callable`** — The PHP function to call when the XPath function gets called within the XPath expression. When a node list is passed as parameter to the callback, they are arrays containing the matched DOM nodes.



## Return Values

No value is returned.

## Examples

**Register a namespaced XPath function and call it from the XPath expression**

```php


<?php

$xml = <<<EOB
<books>
<book>
 <title>PHP Basics</title>
 <author>Jim Smith</author>
 <author>Jane Smith</author>
</book>
<book>
 <title>PHP Secrets</title>
 <author>Jenny Smythe</author>
</book>
<book>
 <title>XML basics</title>
 <author>Joe Black</author>
</book>
</books>
EOB;

$doc = new DOMDocument();
$doc->loadXML($xml);

$xpath = new DOMXPath($doc);

// Register the my: namespace (required)
$xpath->registerNamespace("my", "urn:my.ns");

// Register PHP function
$xpath->registerPHPFunctionNS(
    'urn:my.ns',
    'substring',
    fn (array $arg1, int $start, int $length) => substr($arg1[0]->textContent, $start, $length)
);

// Call substr function on the book title
$nodes = $xpath->query('//book[my:substring(title, 0, 3) = "PHP"]');

echo "Found {$nodes->length} books starting with 'PHP':\n";
foreach ($nodes as $node) {
   $title  = $node->getElementsByTagName("title")->item(0)->nodeValue;
   $author = $node->getElementsByTagName("author")->item(0)->nodeValue;
   echo "$title by $author\n";
}

?>

   
```

The above example will output something similar to:

```text


Found 2 books starting with 'PHP':
PHP Basics by Jim Smith
PHP Secrets by Jenny Smythe

   
```

## See Also

 `DOMXPath::registerNamespace()` `DOMXPath::query()` `DOMXPath::evaluate()` `XSLTProcessor::registerPHPFunctions()` `XSLTProcessor::registerPHPFunctionNS()`
