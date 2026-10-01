---
id: "en-php-function-mysql-xdevapi-collectionmodify-skip"
language: "php"
lang: "en"
category: "function"
name: "CollectionModify::skip"
title: "Skip elements"
signature: "public mysql_xdevapi\\CollectionModify mysql_xdevapi\\CollectionModify::skip(int $position)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-collectionmodify.skip.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Skip elements

## Description

```php
public mysql_xdevapi\CollectionModify mysql_xdevapi\CollectionModify::skip(int $position)
```

Skips the first N elements that would otherwise be returned by a find operation. If the number of elements skipped is larger than the size of the result set, then the find operation returns an empty set.

## Parameters

- **`$position`** — Number of elements to skip.

## Return Values

A CollectionModify object to use for further processing.

## Examples

**`mysql_xdevapi\CollectionModify::skip()` example**

```php


<?php

$coll->modify('age > :age')->sort('age desc')->unset(['age'])->bind(['age' => 20])->limit(4)->skip(1)->execute();

?>

   
```
