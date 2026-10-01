---
id: "en-php-function-xmlwriter-flush"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::flush"
aliases: ["xmlwriter_flush"]
title: "Flush current buffer"
signature: "public string|int XMLWriter::flush(bool $empty = true)"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.flush.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Flush current buffer

## Description

Object-oriented style

```php
public string|int XMLWriter::flush(bool $empty = true)
```

Procedural style

```php
string|int xmlwriter_flush(XMLWriter $writer, bool $empty = true)
```

Flushes the current buffer.

## Parameters

- **`$writer`** — Only for procedural calls. The `XMLWriter` instance that is being modified. This object is returned from a call to `xmlwriter_open_uri()` or `xmlwriter_open_memory()`.
- **`$empty`** — Whether to empty the buffer or not. Default is `true`.

## Return Values

If you opened the writer in memory, this function returns the generated XML buffer, Else, if using URI, this function will write the buffer and return the number of written bytes.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$writer` expects an `XMLWriter` instance now; previously, a `resource` was expected. |
| 8.0.0 | This function can no longer return `false`. |
