---
id: "en-php-function-xmlreader-movetoattributens"
language: "php"
lang: "en"
category: "function"
name: "XMLReader::moveToAttributeNs"
title: "Move cursor to a named attribute"
signature: "public bool XMLReader::moveToAttributeNs(string $name, string $namespace)"
module: "xmlreader"
source_url: "https://www.php.net/manual/en/xmlreader.movetoattributens.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Move cursor to a named attribute

## Description

```php
public bool XMLReader::moveToAttributeNs(string $name, string $namespace)
```

Positions cursor on the named attribute in specified namespace.

## Parameters

- **`$name`** — The local name.
- **`$namespace`** — The namespace URI.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`XMLReader::moveToElement()` `XMLReader::moveToAttribute()` `XMLReader::moveToAttributeNo()` `XMLReader::moveToFirstAttribute()`
