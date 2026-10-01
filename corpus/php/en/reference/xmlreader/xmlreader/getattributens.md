---
id: "en-php-function-xmlreader-getattributens"
language: "php"
lang: "en"
category: "function"
name: "XMLReader::getAttributeNs"
title: "Get the value of an attribute by localname and URI"
signature: "public string|null XMLReader::getAttributeNs(string $name, string $namespace)"
module: "xmlreader"
source_url: "https://www.php.net/manual/en/xmlreader.getattributens.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the value of an attribute by localname and URI

## Description

```php
public string|null XMLReader::getAttributeNs(string $name, string $namespace)
```

Returns the value of an attribute by name and namespace URI or an empty string if attribute does not exist or not positioned on an element node.

## Parameters

- **`$name`** — The local name.
- **`$namespace`** — The namespace URI.

## Return Values

The value of the attribute, or `null` if no attribute with the given `$name` and `$namespace` is found or not positioned of element.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | This function can no longer return `false`. |

## See Also

`XMLReader::getAttribute()` `XMLReader::getAttributeNo()`
