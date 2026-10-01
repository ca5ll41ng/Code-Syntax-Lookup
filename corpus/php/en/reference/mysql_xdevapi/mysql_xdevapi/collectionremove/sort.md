---
id: "en-php-function-mysql-xdevapi-collectionremove-sort"
language: "php"
lang: "en"
category: "function"
name: "CollectionRemove::sort"
title: "Set the sorting criteria"
signature: "public mysql_xdevapi\\CollectionRemove mysql_xdevapi\\CollectionRemove::sort(string $sort_expr)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-collectionremove.sort.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the sorting criteria

## Description

```php
public mysql_xdevapi\CollectionRemove mysql_xdevapi\CollectionRemove::sort(string $sort_expr)
```

Sort the result set by the field selected in the sort_expr argument. The allowed orders are ASC (Ascending) or DESC (Descending). This operation is equivalent to the 'ORDER BY' SQL operation and it follows the same set of rules.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$sort_expr`** — One or more sorting expressions can be provided. The evaluation is from left to right, and each expression is separated by a comma.

## Return Values

A CollectionRemove object that can be used to execute the command, or to add additional operations.

## Examples

**`mysql_xdevapi\CollectionRemove::sort()` example**

```php


<?php

$res = $coll->remove('true')->sort('age desc')->limit(2)->execute();

?>

   
```
