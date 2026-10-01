---
id: "en-php-function-domcharacterdata-replacedata"
language: "php"
lang: "en"
category: "function"
name: "DOMCharacterData::replaceData"
title: "Replace a substring within the character data"
signature: "public bool DOMCharacterData::replaceData(int $offset, int $count, string $data)"
module: "dom"
source_url: "https://www.php.net/manual/en/domcharacterdata.replacedata.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Replace a substring within the character data

## Description

```php
public bool DOMCharacterData::replaceData(int $offset, int $count, string $data)
```

Replace `$count` characters starting from position `$offset` with `$data`.

## Parameters

- **`$offset`** — The offset from which to start replacing.
- **`$count`** — The number of characters to replace. If the sum of `$offset` and `$count` exceeds the length, then all characters to the end of the data are replaced.
- **`$data`** — The string with which the range must be replaced.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

May throw a DOMException with the following error codes:

- **`DOM_INDEX_SIZE_ERR`** — Raised if `$offset` is negative or greater than the number of UTF-8 codepoints in data, or if `$count` is negative.

## See Also

`DOMCharacterData::appendData()` `DOMCharacterData::deleteData()` `DOMCharacterData::insertData()` `DOMCharacterData::substringData()`
