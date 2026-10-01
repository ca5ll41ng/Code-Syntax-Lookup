---
id: "en-php-function-domcharacterdata-deletedata"
language: "php"
lang: "en"
category: "function"
name: "DOMCharacterData::deleteData"
title: "Remove a range of characters from the character data"
signature: "public bool DOMCharacterData::deleteData(int $offset, int $count)"
module: "dom"
source_url: "https://www.php.net/manual/en/domcharacterdata.deletedata.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Remove a range of characters from the character data

## Description

```php
public bool DOMCharacterData::deleteData(int $offset, int $count)
```

Deletes `$count` characters starting from position `$offset`.

## Parameters

- **`$offset`** — The offset from which to start removing.
- **`$count`** — The number of characters to delete. If the sum of `$offset` and `$count` exceeds the length, then all characters to the end of the data are deleted.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

May throw a DOMException with the following error codes:

- **`DOM_INDEX_SIZE_ERR`** — Raised if `$offset` is negative or greater than the number of UTF-8 codepoints in data, or if `$count` is negative.

## See Also

`DOMCharacterData::appendData()` `DOMCharacterData::insertData()` `DOMCharacterData::replaceData()` `DOMCharacterData::substringData()`
