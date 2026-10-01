---
id: "en-php-function-xmlwriter-setindentstring"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::setIndentString"
aliases: ["xmlwriter_set_indent_string"]
title: "Set string used for indenting"
signature: "public bool XMLWriter::setIndentString(string $indentation)"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.setindentstring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set string used for indenting

## Description

Object-oriented style

```php
public bool XMLWriter::setIndentString(string $indentation)
```

Procedural style

```php
bool xmlwriter_set_indent_string(XMLWriter $writer, string $indentation)
```

Sets the string which will be used to indent each element/attribute of the resulting xml.

## Parameters

- **`$writer`** — Only for procedural calls. The `XMLWriter` instance that is being modified. This object is returned from a call to `xmlwriter_open_uri()` or `xmlwriter_open_memory()`.
- **`$indentation`** — The indentation string.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$writer` expects an `XMLWriter` instance now; previously, a `resource` was expected. |

## Notes

> The indent is reset when an xmlwriter is opened.

## See Also

`XMLWriter::setIndent()`
