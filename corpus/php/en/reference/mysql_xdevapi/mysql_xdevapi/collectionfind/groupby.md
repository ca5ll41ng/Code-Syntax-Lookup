---
id: "en-php-function-mysql-xdevapi-collectionfind-groupby"
language: "php"
lang: "en"
category: "function"
name: "CollectionFind::groupBy"
title: "Set grouping criteria"
signature: "public mysql_xdevapi\\CollectionFind mysql_xdevapi\\CollectionFind::groupBy(string $sort_expr)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-collectionfind.groupby.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set grouping criteria

## Description

```php
public mysql_xdevapi\CollectionFind mysql_xdevapi\CollectionFind::groupBy(string $sort_expr)
```

This function can be used to group the result set by one or more columns. It is often used with aggregate functions such as `COUNT`, `MAX`, `MIN`, `SUM` etc.

## Parameters

- **`$sort_expr`** — The column or columns that have to be used for the group operation, this can either be a single string or an array of string arguments, one for each column.

## Return Values

A CollectionFind object that can be used for further processing.

## Examples

**`mysql_xdevapi\CollectionFind::groupBy()` example**

```php


<?php

// Assuming $coll is a valid Collection object

// Extract all the documents from the Collection and group the results by the 'name' field
$res = $coll->find()->groupBy('name')->execute();

?>

   
```
