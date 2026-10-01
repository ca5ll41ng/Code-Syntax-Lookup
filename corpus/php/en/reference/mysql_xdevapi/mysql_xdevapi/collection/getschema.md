---
id: "en-php-function-mysql-xdevapi-collection-getschema"
language: "php"
lang: "en"
category: "function"
name: "Collection::getSchema"
title: "Get schema object"
signature: "public Schema Object mysql_xdevapi\\Collection::getSchema()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-collection.getschema.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get schema object

## Description

```php
public Schema Object mysql_xdevapi\Collection::getSchema()
```

Retrieve the schema object that contains the collection.

## Parameters

This function has no parameters.

## Return Values

The schema object on success, or `null` if the object cannot be retrieved for the given collection.

## Examples

**`mysql_xdevapi\Collection::getSchema()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();

$schema     = $session->getSchema("addressbook");
$collection = $schema->createCollection("people");

var_dump($collection->getSchema());
?>

   
```

The above example will output something similar to:

```text


object(mysql_xdevapi\Schema)#9 (1) {
  ["name"]=>
  string(11) "addressbook"
}

   
```
