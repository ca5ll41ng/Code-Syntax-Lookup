---
id: "en-php-function-domcharacterdata-substringdata"
language: "php"
lang: "en"
category: "function"
name: "DOMCharacterData::substringData"
title: "Extracts a range of data from the character data"
signature: "public string|false DOMCharacterData::substringData(int $offset, int $count)"
module: "dom"
source_url: "https://www.php.net/manual/en/domcharacterdata.substringdata.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Extracts a range of data from the character data

## Description

```php
public string|false DOMCharacterData::substringData(int $offset, int $count)
```

Returns the specified substring.

## Parameters

- **`$offset`** — Start offset of substring to extract.
- **`$count`** — The number of characters to extract.

## Return Values

The specified substring. If the sum of `$offset` and `$count` exceeds the length, then all UTF-8 codepoints to the end of the data are returned.

## Errors/Exceptions

May throw a DOMException with the following error codes:

- **`DOM_INDEX_SIZE_ERR`** — Raised if `$offset` is negative or greater than the number of UTF-8 codepoints in data, or if `$count` is negative.

## See Also

`DOMCharacterData::appendData()` `DOMCharacterData::deleteData()` `DOMCharacterData::insertData()` `DOMCharacterData::replaceData()`
