---
id: "en-php-function-xmlreader-movetoattribute"
language: "php"
lang: "en"
category: "function"
name: "XMLReader::moveToAttribute"
title: "Move cursor to a named attribute"
signature: "public bool XMLReader::moveToAttribute(string $name)"
module: "xmlreader"
source_url: "https://www.php.net/manual/en/xmlreader.movetoattribute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Move cursor to a named attribute

## Description

```php
public bool XMLReader::moveToAttribute(string $name)
```

Positions cursor on the named attribute.

## Parameters

- **`$name`** — The name of the attribute.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`XMLReader::moveToElement()` `XMLReader::moveToAttributeNo()` `XMLReader::moveToAttributeNs()` `XMLReader::moveToFirstAttribute()`
