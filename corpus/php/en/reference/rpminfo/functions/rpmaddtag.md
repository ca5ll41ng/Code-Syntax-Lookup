---
id: "en-php-function-function-rpmaddtag"
language: "php"
lang: "en"
category: "function"
name: "rpmaddtag"
title: "Add tag retrieved in query"
signature: "bool rpmaddtag(int $tag)"
module: "rpminfo"
source_url: "https://www.php.net/manual/en/function.rpmaddtag.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add tag retrieved in query

## Description

```php
bool rpmaddtag(int $tag)
```

Add an additional retrieved tag in subsequent queries.

## Parameters

- **`$tag`** — One of `RPMTAG_{*}` constant.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `rpminfo()` `rpmdbinfo()` `rpmdbsearch()`
