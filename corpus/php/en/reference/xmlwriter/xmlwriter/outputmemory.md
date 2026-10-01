---
id: "en-php-function-xmlwriter-outputmemory"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::outputMemory"
aliases: ["xmlwriter_output_memory"]
title: "Returns current buffer"
signature: "public string XMLWriter::outputMemory(bool $flush = true)"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.outputmemory.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns current buffer

## Description

Object-oriented style

```php
public string XMLWriter::outputMemory(bool $flush = true)
```

Procedural style

```php
string xmlwriter_output_memory(XMLWriter $writer, bool $flush = true)
```

Returns the current buffer.

## Parameters

- **`$writer`** — Only for procedural calls. The `XMLWriter` instance that is being modified. This object is returned from a call to `xmlwriter_open_uri()` or `xmlwriter_open_memory()`.
- **`$flush`** — Whether to flush the output buffer or not. Default is `true`.

## Return Values

Returns the current buffer as a string.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$writer` expects an `XMLWriter` instance now; previously, a `resource` was expected. |

## See Also

`XMLWriter::flush()`
