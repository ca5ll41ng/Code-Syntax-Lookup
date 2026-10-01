---
id: "en-php-function-xmlreader-next"
language: "php"
lang: "en"
category: "function"
name: "XMLReader::next"
title: "Move cursor to next node skipping all subtrees"
signature: "public bool XMLReader::next(string|null $name = null)"
module: "xmlreader"
source_url: "https://www.php.net/manual/en/xmlreader.next.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Move cursor to next node skipping all subtrees

## Description

```php
public bool XMLReader::next(string|null $name = null)
```

Positions cursor on the next node skipping all subtrees. If no such node exists, the cursor is moved to the end of the document.

## Parameters

- **`$name`** — The name of the next node to move to.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$name` is nullable now. |

## See Also

`XMLReader::moveToNextAttribute()` `XMLReader::moveToElement()` `XMLReader::moveToAttribute()`
