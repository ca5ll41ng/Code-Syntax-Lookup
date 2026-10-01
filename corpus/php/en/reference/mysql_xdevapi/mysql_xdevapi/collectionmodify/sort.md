---
id: "en-php-function-mysql-xdevapi-collectionmodify-sort"
language: "php"
lang: "en"
category: "function"
name: "CollectionModify::sort"
title: "Set the sorting criteria"
signature: "public mysql_xdevapi\\CollectionModify mysql_xdevapi\\CollectionModify::sort(string $sort_expr)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-collectionmodify.sort.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the sorting criteria

## Description

```php
public mysql_xdevapi\CollectionModify mysql_xdevapi\CollectionModify::sort(string $sort_expr)
```

Sorts the result set by the field selected in the sort_expr argument. The allowed orders are ASC (Ascending) or DESC (Descending). This operation is equivalent to the 'ORDER BY' SQL operation and it follows the same set of rules.

## Parameters

- **`$sort_expr`** — One or more sort expressions can be provided. The evaluation is from left to right and each expression must be separated by a comma.

## Return Values

CollectionModify object that can be used for further processing.

## Examples

**`mysql_xdevapi\CollectionModify::sort()` example**

```php


<?php

$res = $coll->modify('true')->sort('name desc', 'age asc')->limit(4)->set('Married', 'NO')->execute();

?>

   
```
