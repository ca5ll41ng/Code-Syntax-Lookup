---
id: "en-php-function-function-yaz-ccl-parse"
language: "php"
lang: "en"
category: "function"
name: "yaz_ccl_parse"
title: "Invoke CCL Parser"
signature: "bool yaz_ccl_parse(resource $id, string $query, array $result)"
module: "yaz"
source_url: "https://www.php.net/manual/en/function.yaz-ccl-parse.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Invoke CCL Parser

## Description

```php
bool yaz_ccl_parse(resource $id, string $query, array $result)
```

This function invokes a CCL parser. It converts a given CCL FIND query to an RPN query which may be passed to the `yaz_search()` function to perform a search.

To define a set of valid CCL fields call `yaz_ccl_conf()` prior to this function.

## Parameters

- **`$id`** — The connection resource returned by `yaz_connect()`.
- **`$query`** — The CCL FIND query.
- **`$result`** — If the function was executed successfully, this will be an array containing the valid RPN query under the key `rpn`. — Upon failure, three indexes are set in this array to indicate the cause of failure: - `errorcode` - the CCL error code (integer) - `errorstring` - the CCL error string - `errorpos` - approximate position in query of failure (integer is character position)

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**CCL Parsing**

We will try to search using CCL. In the example below, `$ccl` is a CCL query.

```php


<?php

yaz_ccl_conf($id, $fields);  // see example for yaz_ccl_conf
if (!yaz_ccl_parse($id, $ccl, $cclresult)) {
    echo 'Error: ' . $cclresult["errorstring"];
} else {
    $rpn = $cclresult["rpn"];
    yaz_search($id, "rpn", $rpn);
}
?>

   
```
