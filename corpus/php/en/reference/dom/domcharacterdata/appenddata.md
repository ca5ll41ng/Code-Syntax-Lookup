---
id: "en-php-function-domcharacterdata-appenddata"
language: "php"
lang: "en"
category: "function"
name: "DOMCharacterData::appendData"
title: "Append the string to the end of the character data of the node"
signature: "public true DOMCharacterData::appendData(string $data)"
module: "dom"
source_url: "https://www.php.net/manual/en/domcharacterdata.appenddata.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Append the string to the end of the character data of the node

## Description

```php
public true DOMCharacterData::appendData(string $data)
```

Append the string `$data` to the end of the character data of the node.

## Parameters

- **`$data`** — The string to append.

## Return Values

Always returns `true`.

## Changelog

|  |  |
| --- | --- |
| 8.3.0 | This function now has a tentative `true` return type. |

## See Also

`DOMCharacterData::deleteData()` `DOMCharacterData::insertData()` `DOMCharacterData::replaceData()` `DOMCharacterData::substringData()`
