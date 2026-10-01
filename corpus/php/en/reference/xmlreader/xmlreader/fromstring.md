---
id: "en-php-function-xmlreader-fromstring"
language: "php"
lang: "en"
category: "function"
name: "XMLReader::fromString"
title: "Creates an `XMLReader` from an XML string"
signature: "public static static XMLReader::fromString(string $source, string|null $encoding = null, int $flags = 0)"
module: "xmlreader"
source_url: "https://www.php.net/manual/en/xmlreader.fromstring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates an `XMLReader` from an XML string

## Description

```php
public static static XMLReader::fromString(string $source, string|null $encoding = null, int $flags = 0)
```

Creates an `XMLReader` from an XML string.

## parameters



## Return Values

Returns an `XMLReader`.

## Errors/Exceptions

- Passing an invalid `$encoding` will throw a ValueError.

## See Also

 `XMLReader::fromStream()` `XMLReader::fromUri()`
