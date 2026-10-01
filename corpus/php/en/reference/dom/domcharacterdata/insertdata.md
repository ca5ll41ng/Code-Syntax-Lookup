---
id: "en-php-function-domcharacterdata-insertdata"
language: "php"
lang: "en"
category: "function"
name: "DOMCharacterData::insertData"
title: "Insert a string at the specified UTF-8 codepoint offset"
signature: "public bool DOMCharacterData::insertData(int $offset, string $data)"
module: "dom"
source_url: "https://www.php.net/manual/en/domcharacterdata.insertdata.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Insert a string at the specified UTF-8 codepoint offset

## Description

```php
public bool DOMCharacterData::insertData(int $offset, string $data)
```

Inserts string `$data` at position `$offset`.

## Parameters

- **`$offset`** — The character offset at which to insert.
- **`$data`** — The string to insert.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

May throw a DOMException with the following error codes:

- **`DOM_INDEX_SIZE_ERR`** — Raised if `$offset` is negative or greater than the number of UTF-8 codepoints in data.

## See Also

`DOMCharacterData::appendData()` `DOMCharacterData::deleteData()` `DOMCharacterData::replaceData()` `DOMCharacterData::substringData()`
