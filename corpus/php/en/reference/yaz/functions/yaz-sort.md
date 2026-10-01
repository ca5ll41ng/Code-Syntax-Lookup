---
id: "en-php-function-function-yaz-sort"
language: "php"
lang: "en"
category: "function"
name: "yaz_sort"
title: "Sets sorting criteria"
signature: "void yaz_sort(resource $id, string $criteria)"
module: "yaz"
source_url: "https://www.php.net/manual/en/function.yaz-sort.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets sorting criteria

## Description

```php
void yaz_sort(resource $id, string $criteria)
```

This function sets sorting criteria and enables Z39.50 Sort.

Call this function *before* `yaz_search()`. Using this function alone does not have any effect. When used in conjunction with `yaz_search()`, a Z39.50 Sort will be sent after a search response has been received and before any records are retrieved with Z39.50 Present (`yaz_present()`.

## Parameters

- **`$id`** — The connection resource returned by `yaz_connect()`.
- **`$criteria`** — A string that takes the form {field1 flags1 field2 flags2} where field1 specifies the primary attributes for sort, field2 seconds, etc.. — The field specifies either a numerical attribute combinations consisting of type=value pairs separated by comma (e.g. `1=4,2=1`) ; or the field may specify a plain string criteria (e.g. `title`. The flags is a sequence of the following characters which may not be separated by any white space. — - **`a`** — Sort ascending - **`d`** — Sort descending - **`i`** — Case insensitive sorting - **`s`** — Case sensitive sorting

## Return Values

No value is returned.

## Examples

**Sort Criterias**

To sort on Bib1 attribute title, case insensitive, and ascending you would use the following sort criteria:

```text


1=4 ia

    
```

If the secondary sorting criteria should be author, case sensitive and ascending you would use:

```text


1=4 ia 1=1003 sa

    
```
