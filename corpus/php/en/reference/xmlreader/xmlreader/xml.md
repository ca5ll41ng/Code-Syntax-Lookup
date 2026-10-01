---
id: "en-php-function-xmlreader-xml"
language: "php"
lang: "en"
category: "function"
name: "XMLReader::XML"
title: "Set the data containing the XML to parse"
signature: "public static XMLReader XMLReader::XML(string $source, string|null $encoding = null, int $flags = 0)"
module: "xmlreader"
source_url: "https://www.php.net/manual/en/xmlreader.xml.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the data containing the XML to parse

## Description

```php
public static XMLReader XMLReader::XML(string $source, string|null $encoding = null, int $flags = 0)
```

```php
public bool XMLReader::XML(string $source, string|null $encoding = null, int $flags = 0)
```

Set the data containing the XML to parse.

## Parameters

- **`$source`** — String containing the XML to be parsed.
- **`$encoding`** — The document encoding or `null`.
- **`$flags`** — A bitmask of the LIBXML_* constants.

## Return Values

Returns `true` on success or `false` on failure. If called statically, returns an `XMLReader` or `false` on failure.

## Errors/Exceptions

- Passing an invalid `$encoding` will throw a ValueError.
- This method may be called statically, but prior to PHP 8.0.0, will issue an `E_DEPRECATED` error in this case.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | Passing an invalid `$encoding` will now throw a ValueError. |
| 8.0.0 | `XMLReader::XML()` is now declared as static method, but can still be called on an `XMLReader` instance. |

## See Also

`XMLReader::open()` `XMLReader::close()`
