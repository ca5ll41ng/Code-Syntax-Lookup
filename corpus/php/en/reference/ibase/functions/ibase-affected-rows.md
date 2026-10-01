---
id: "en-php-function-function-ibase-affected-rows"
language: "php"
lang: "en"
category: "function"
name: "ibase_affected_rows"
title: "Return the number of rows that were affected by the previous query"
signature: "int ibase_affected_rows([resource $link_identifier = ...])"
module: "ibase"
source_url: "https://www.php.net/manual/en/function.ibase-affected-rows.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the number of rows that were affected by the previous query

## Description

```php
int ibase_affected_rows([resource $link_identifier = ...])
```

This function returns the number of rows that were affected by the previous query (INSERT, UPDATE or DELETE) that was executed from within the specified transaction context.

## Parameters

- **`$link_identifier`** — A transaction context. If `$link_identifier` is a connection resource, its default transaction is used.

## Return Values

Returns the number of rows as an integer.

## See Also

 `ibase_query()` `ibase_execute()`
