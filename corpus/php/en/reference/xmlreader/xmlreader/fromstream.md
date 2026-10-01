---
id: "en-php-function-xmlreader-fromstream"
language: "php"
lang: "en"
category: "function"
name: "XMLReader::fromStream"
title: "Creates an `XMLReader` from a stream to read from"
signature: "public static static XMLReader::fromStream(resource $stream, string|null $encoding = null, int $flags = 0, string|null $documentUri = null)"
module: "xmlreader"
source_url: "https://www.php.net/manual/en/xmlreader.fromstream.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates an `XMLReader` from a stream to read from

## Description

```php
public static static XMLReader::fromStream(resource $stream, string|null $encoding = null, int $flags = 0, string|null $documentUri = null)
```

Creates an `XMLReader` from a stream to read from.

## Parameters

- **`$stream`** — The stream to read the XML from.
- **`$encoding`** — The document encoding or `null`.
- **`$flags`** — A bitmask of the `LIBXML_{*}` constants.
- **`$documentUri`** — Optional document base URI.

## Return Values

Returns an `XMLReader`.

## Errors/Exceptions

- Passing an invalid `$encoding` will throw a ValueError.
- Passing a resource that is not a stream to `$stream` will throw a TypeError.

## See Also

 `XMLReader::fromString()` `XMLReader::fromUri()`
