---
id: "en-php-function-xmlwriter-tostream"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::toStream"
title: "Create new `XMLWriter` using a stream for output"
signature: "public static static XMLWriter::toStream(resource $stream)"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.tostream.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create new `XMLWriter` using a stream for output

## Description

```php
public static static XMLWriter::toStream(resource $stream)
```

Creates a new `XMLWriter` using a stream for output.

## Parameters

- **`$stream`** — The stream to use for output.

## Return Values

Returns an `XMLWriter`.

## Errors/Exceptions

- Passing a resource that is not a stream to `$stream` will throw a TypeError.

## See Also

 `XMLWriter::toMemory()` `XMLWriter::toUri()`
