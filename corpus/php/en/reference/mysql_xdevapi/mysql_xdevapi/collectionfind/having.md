---
id: "en-php-function-mysql-xdevapi-collectionfind-having"
language: "php"
lang: "en"
category: "function"
name: "CollectionFind::having"
title: "Set condition for aggregate functions"
signature: "public mysql_xdevapi\\CollectionFind mysql_xdevapi\\CollectionFind::having(string $sort_expr)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-collectionfind.having.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set condition for aggregate functions

## Description

```php
public mysql_xdevapi\CollectionFind mysql_xdevapi\CollectionFind::having(string $sort_expr)
```

This function can be used after the 'field' operation in order to make a selection on the documents to extract.

## Parameters

- **`$sort_expr`** — This must be a valid SQL expression, the use of aggreate functions is allowed

## Return Values

CollectionFind object that can be used for further processing

## Examples

**`mysql_xdevapi\CollectionFind::having()` example**

```php


<?php

//Assuming $coll is a valid Collection object

//Find all the documents for which the 'age' is greather than 40,
//Only the columns 'name' and 'age' are returned in the Result object
$res = $coll->find()->fields(['name','age'])->having('age > 40')->execute();

?>

   
```
