---
id: "en-php-function-mysql-xdevapi-collectionmodify-unset"
language: "php"
lang: "en"
category: "function"
name: "CollectionModify::unset"
title: "Unset the value of document fields"
signature: "public mysql_xdevapi\\CollectionModify mysql_xdevapi\\CollectionModify::unset(array $fields)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-collectionmodify.unset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Unset the value of document fields

## Description

```php
public mysql_xdevapi\CollectionModify mysql_xdevapi\CollectionModify::unset(array $fields)
```

Removes attributes from documents in a collection.

## Parameters

- **`$fields`** — The attributes to remove from documents in a collection.

## Return Values

CollectionModify object that can be used for further processing.

## Examples

**`mysql_xdevapi\CollectionModify::unset()` example**

```php


<?php

$res = $coll->modify('job like :job_name')->unset(["age", "name"])->bind(['job_name' => 'Plumber'])->execute();

?>

   
```
