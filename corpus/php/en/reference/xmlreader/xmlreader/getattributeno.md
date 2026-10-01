---
id: "en-php-function-xmlreader-getattributeno"
language: "php"
lang: "en"
category: "function"
name: "XMLReader::getAttributeNo"
title: "Get the value of an attribute by index"
signature: "public string|null XMLReader::getAttributeNo(int $index)"
module: "xmlreader"
source_url: "https://www.php.net/manual/en/xmlreader.getattributeno.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the value of an attribute by index

## Description

```php
public string|null XMLReader::getAttributeNo(int $index)
```

Returns the value of an attribute based on its position or an empty string if attribute does not exist or not positioned on an element node.

## Parameters

- **`$index`** — The position of the attribute.

## Return Values

The value of the attribute, or `null` if no attribute exists at `$index` or is not positioned on the element.

## See Also

`XMLReader::getAttribute()` `XMLReader::getAttributeNs()`
