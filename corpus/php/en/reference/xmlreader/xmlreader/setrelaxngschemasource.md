---
id: "en-php-function-xmlreader-setrelaxngschemasource"
language: "php"
lang: "en"
category: "function"
name: "XMLReader::setRelaxNGSchemaSource"
title: "Set the data containing a RelaxNG Schema"
signature: "public bool XMLReader::setRelaxNGSchemaSource(string|null $source)"
module: "xmlreader"
source_url: "https://www.php.net/manual/en/xmlreader.setrelaxngschemasource.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the data containing a RelaxNG Schema

## Description

```php
public bool XMLReader::setRelaxNGSchemaSource(string|null $source)
```

Set the data containing a RelaxNG Schema to use for validation.

## Parameters

- **`$source`** — String containing the RelaxNG Schema.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`XMLReader::setRelaxNGSchema()` `XMLReader::setSchema()` `XMLReader::isValid()`
