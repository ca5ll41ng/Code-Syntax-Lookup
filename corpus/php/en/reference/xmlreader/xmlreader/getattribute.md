---
id: "en-php-function-xmlreader-getattribute"
language: "php"
lang: "en"
category: "function"
name: "XMLReader::getAttribute"
title: "Get the value of a named attribute"
signature: "public string|null XMLReader::getAttribute(string $name)"
module: "xmlreader"
source_url: "https://www.php.net/manual/en/xmlreader.getattribute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the value of a named attribute

## Description

```php
public string|null XMLReader::getAttribute(string $name)
```

Returns the value of a named attribute or `null` if the attribute does not exist or not positioned on an element node.

## Parameters

- **`$name`** — The name of the attribute.

## Return Values

The value of the attribute, or `null` if no attribute with the given `$name` is found or not positioned on an element node.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | This function can no longer return `false`. |

## See Also

`XMLReader::getAttributeNo()` `XMLReader::getAttributeNs()`
