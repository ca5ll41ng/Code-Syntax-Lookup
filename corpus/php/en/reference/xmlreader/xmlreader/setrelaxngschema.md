---
id: "en-php-function-xmlreader-setrelaxngschema"
language: "php"
lang: "en"
category: "function"
name: "XMLReader::setRelaxNGSchema"
title: "Set the filename or URI for a RelaxNG Schema"
signature: "public bool XMLReader::setRelaxNGSchema(string|null $filename)"
module: "xmlreader"
source_url: "https://www.php.net/manual/en/xmlreader.setrelaxngschema.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the filename or URI for a RelaxNG Schema

## Description

```php
public bool XMLReader::setRelaxNGSchema(string|null $filename)
```

Set the filename or URI for the RelaxNG Schema to use for validation.

## Parameters

- **`$filename`** — filename or URI pointing to a RelaxNG Schema.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`XMLReader::setRelaxNGSchemaSource()` `XMLReader::setSchema()` `XMLReader::isValid()`
