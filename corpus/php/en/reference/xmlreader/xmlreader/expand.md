---
id: "en-php-function-xmlreader-expand"
language: "php"
lang: "en"
category: "function"
name: "XMLReader::expand"
title: "Returns a copy of the current node as a DOM object"
signature: "public DOMNode|false XMLReader::expand(DOMNode|null $baseNode = null)"
module: "xmlreader"
source_url: "https://www.php.net/manual/en/xmlreader.expand.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a copy of the current node as a DOM object

## Description

```php
public DOMNode|false XMLReader::expand(DOMNode|null $baseNode = null)
```

This method copies the current node and returns the appropriate DOM object.

## Parameters

- **`$baseNode`** — A `DOMNode` defining the target `DOMDocument` for the created DOM object.

## Return Values

The resulting `DOMNode` or `false` on error.
