---
id: "en-php-function-domdocument-getelementsbytagnamens"
language: "php"
lang: "en"
category: "function"
name: "DOMDocument::getElementsByTagNameNS"
title: "Searches for all elements with given tag name in specified namespace"
signature: "public DOMNodeList DOMDocument::getElementsByTagNameNS(string|null $namespace, string $localName)"
module: "dom"
source_url: "https://www.php.net/manual/en/domdocument.getelementsbytagnamens.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Searches for all elements with given tag name in specified namespace

## Description

```php
public DOMNodeList DOMDocument::getElementsByTagNameNS(string|null $namespace, string $localName)
```

Returns a `DOMNodeList` of all elements with a given local name and a namespace URI.

## Parameters

- **`$namespace`** — The namespace URI of the elements to match on. The special value `"*"` matches all namespaces. Passing `null` matches the empty namespace.
- **`$localName`** — The local name of the elements to match on. The special value `"*"` matches all local names.

## Return Values

A new `DOMNodeList` object containing all the matched elements.

## Changelog

|  |  |
| --- | --- |
| 8.0.3 | `$namespace` is nullable now. |

## Examples

**Get all the XInclude elements**

```php


<?php

$xml = <<<EOD
<?xml version="1.0" ?>
<chapter xmlns:xi="http://www.w3.org/2001/XInclude">
<title>Books of the other guy..</title>
<para>
 <xi:include href="book.xml">
  <xi:fallback>
   <error>xinclude: book.xml not found</error>
  </xi:fallback>
 </xi:include>
 <include>
  This is another namespace
 </include>
</para>
</chapter>
EOD;
$dom = new DOMDocument;

// load the XML string defined above
$dom->loadXML($xml);

foreach ($dom->getElementsByTagNameNS('http://www.w3.org/2001/XInclude', '*') as $element) {
    echo 'local name: ', $element->localName, ', prefix: ', $element->prefix, "\n";
}
?>

    
```

The above example will output:

```text


local name: include, prefix: xi
local name: fallback, prefix: xi

    
```

## See Also

`DOMDocument::getElementsByTagName()`
