---
id: "en-php-function-mysql-xdevapi-collectionremove-limit"
language: "php"
lang: "en"
category: "function"
name: "CollectionRemove::limit"
title: "Limit number of documents to remove"
signature: "public mysql_xdevapi\\CollectionRemove mysql_xdevapi\\CollectionRemove::limit(int $rows)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-collectionremove.limit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Limit number of documents to remove

## Description

```php
public mysql_xdevapi\CollectionRemove mysql_xdevapi\CollectionRemove::limit(int $rows)
```

Sets the maximum number of documents to remove.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$rows`** — The maximum number of documents to remove.

## Return Values

Returns a CollectionRemove object that can be used to execute the command, or to add additional operations.

## Examples

**`mysql_xdevapi\CollectionRemove::limit()` example**

```php


<?php

$res = $coll->remove('job in (\'Barista\', \'Programmatore\', \'Ballerino\', \'Programmatrice\')')->limit(5)->sort(['age desc', 'name asc'])->execute();

?>

   
```
