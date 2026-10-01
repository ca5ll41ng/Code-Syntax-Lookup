---
id: "en-php-function-xmlreader-fromuri"
language: "php"
lang: "en"
category: "function"
name: "XMLReader::fromUri"
title: "Creates an `XMLReader` from a URI to read from"
signature: "public static static XMLReader::fromUri(string $uri, string|null $encoding = null, int $flags = 0)"
module: "xmlreader"
source_url: "https://www.php.net/manual/en/xmlreader.fromuri.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates an `XMLReader` from a URI to read from

## Description

```php
public static static XMLReader::fromUri(string $uri, string|null $encoding = null, int $flags = 0)
```

Creates an `XMLReader` from a URI to read from.

## parameters



## Return Values

Returns an `XMLReader`.

## Errors/Exceptions

- Passing an invalid `$encoding` will throw a ValueError.

## See Also

 `XMLReader::fromStream()` `XMLReader::fromString()`
