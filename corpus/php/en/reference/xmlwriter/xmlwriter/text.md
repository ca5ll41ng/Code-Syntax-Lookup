---
id: "en-php-function-xmlwriter-text"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::text"
aliases: ["xmlwriter_text"]
title: "Write text"
signature: "public bool XMLWriter::text(string $content)"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.text.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Write text

## Description

Object-oriented style

```php
public bool XMLWriter::text(string $content)
```

Procedural style

```php
bool xmlwriter_text(XMLWriter $writer, string $content)
```

Writes a text.

## Parameters

- **`$writer`** — Only for procedural calls. The `XMLWriter` instance that is being modified. This object is returned from a call to `xmlwriter_open_uri()` or `xmlwriter_open_memory()`.
- **`$content`** — The contents of the text. The characters `<`, `>`, `&` and `"` are written as entity references (i.e. ``, ``, `` and ``, respectively). All other characters including `'` are written literally. To write the special XML characters literally, or to write literal entity references, `xmlwriter_write_raw()` has to be used.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$writer` expects an `XMLWriter` instance now; previously, a `resource` was expected. |
