---
id: "en-php-function-mysql-xdevapi-crudoperationsortable-sort"
language: "php"
lang: "en"
category: "function"
name: "CrudOperationSortable::sort"
title: "Sort results"
signature: "abstract public mysql_xdevapi\\CrudOperationSortable mysql_xdevapi\\CrudOperationSortable::sort(string $sort_expr)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-crudoperationsortable.sort.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sort results

## Description

```php
abstract public mysql_xdevapi\CrudOperationSortable mysql_xdevapi\CrudOperationSortable::sort(string $sort_expr)
```

Sort the result set by the field selected in the sort_expr argument. The allowed orders are ASC (Ascending) or DESC (Descending). This operation is equivalent to the 'ORDER BY' SQL operation and it follows the same set of rules.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$sort_expr`** — One or more sorting expressions can be provided. The evaluation is from left to right, and each expression is separated by a comma.

## Return Values

A CrudOperationSortable object.

## Examples

**`mysql_xdevapi\CrudOperationSortable::sort()` example**

```php


<?php

$res = $coll->find('job like \'Cavia\'')->sort('age desc', '_id desc')->execute();

?>

   
```
