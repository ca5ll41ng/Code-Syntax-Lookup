---
id: "en-php-function-mysql-xdevapi-collectionremove-execute"
language: "php"
lang: "en"
category: "function"
name: "CollectionRemove::execute"
title: "Execute remove operation"
signature: "public mysql_xdevapi\\Result mysql_xdevapi\\CollectionRemove::execute()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-collectionremove.execute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Execute remove operation

## Description

```php
public mysql_xdevapi\Result mysql_xdevapi\CollectionRemove::execute()
```

The execute function needs to be invoked in order to trigger the client to send the CRUD operation request to the server.

> This function is currently not documented; only its argument list is available.

## Parameters

This function has no parameters.

## Return Values

Result object.

## Examples

**`mysql_xdevapi\CollectionRemove::execute()` example**

```php


<?php

$res = $coll->remove('true')->sort('age desc')->limit(2)->execute();

?>

   
```
