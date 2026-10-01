---
id: "en-php-function-domxpath-registerphpfunctions"
language: "php"
lang: "en"
category: "function"
name: "DOMXPath::registerPhpFunctions"
title: "Register PHP functions as XPath functions"
signature: "public void DOMXPath::registerPhpFunctions(string|array|null $restrict = null)"
module: "dom"
source_url: "https://www.php.net/manual/en/domxpath.registerphpfunctions.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Register PHP functions as XPath functions

## Description

```php
public void DOMXPath::registerPhpFunctions(string|array|null $restrict = null)
```

This method enables the ability to use PHP functions within XPath expressions.

## Parameters

- **`$restrict`** — Use this parameter to only allow certain functions to be called from XPath. — This parameter can be one of the following: a `string` (a function name), an indexed `array` of function names, or an associative `array` with keys being the function name and the associated value being the `callable`.

## Return Values

No value is returned.

## Errors/Exceptions

- Throws a ValueError if a callback name is not valid.
- Throws a ValueError if `$options` contains an invalid option.
- Throws a ValueError if `$overrideEncoding` is an unknown encoding.
- Throws a TypeError if a given callback is not callable.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | Invalid callback names now throws a ValueError. Passing a non-callable entry now throws a TypeError. |
| 8.4.0 | It is now possible to use `callable`s for callbacks when using `$restrict` with `array` entries. |

## Examples

The following examples use `book.xml` which contains the following:

**book.xml**

```xml


<?xml version="1.0" encoding="UTF-8"?>
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

    
```

**`DOMXPath::registerPhpFunctions()` with `php:functionString`**

```php


<?php
$doc = new DOMDocument;
$doc->load('examples/book-simple.xml');

$xpath = new DOMXPath($doc);

// Register the php: namespace (required)
$xpath->registerNamespace("php", "http://php.net/xpath");

// Register PHP functions (no restrictions)
$xpath->registerPhpFunctions();

// Call substr function on the book title
$nodes = $xpath->query('//book[php:functionString("substr", title, 0, 3) = "PHP"]');

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

**`DOMXPath::registerPhpFunctions()` with `php:function`**

```php


<?php
$doc = new DOMDocument;
$doc->load('examples/book-simple.xml');

$xpath = new DOMXPath($doc);

// Register the php: namespace (required)
$xpath->registerNamespace("php", "http://php.net/xpath");

// Register PHP functions (has_multiple only)
$xpath->registerPhpFunctions("has_multiple");
 
function has_multiple($nodes) {
    // Return true if more than one author
    return count($nodes) > 1;
}
// Filter books with multiple authors
$books = $xpath->query('//book[php:function("has_multiple", author)]');

echo "Books with multiple authors:\n";
foreach ($books as $book) {
    echo $book->getElementsByTagName("title")->item(0)->nodeValue . "\n";
}

?>

    
```

The above example will output something similar to:

```text


Books with multiple authors:
PHP Basics

    
```

**`DOMXPath::registerPhpFunctions()` with a `callable`**

```php


<?php
$doc = new DOMDocument;
$doc->load('examples/book-simple.xml');

$xpath = new DOMXPath($doc);

// Register the php: namespace (required)
$xpath->registerNamespace("php", "http://php.net/xpath");

// Register PHP functions (has_multiple only)
$xpath->registerPhpFunctions(["has_multiple" => fn ($nodes) => count($nodes) > 1]);

// Filter books with multiple authors
$books = $xpath->query('//book[php:function("has_multiple", author)]');

echo "Books with multiple authors:\n";
foreach ($books as $book) {
    echo $book->getElementsByTagName("title")->item(0)->nodeValue . "\n";
}

?>

    
```

The above example will output something similar to:

```text


Books with multiple authors:
PHP Basics

    
```

## See Also

`DOMXPath::registerNamespace()` `DOMXPath::query()` `DOMXPath::evaluate()` `XSLTProcessor::registerPHPFunctions()`
