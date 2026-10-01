---
id: "en-php-function-mysql-xdevapi-collectionmodify-construct"
language: "php"
lang: "en"
category: "function"
name: "CollectionModify::__construct"
title: "CollectionModify constructor"
signature: "private mysql_xdevapi\\CollectionModify::__construct()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-collectionmodify.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# CollectionModify constructor

## Description

```php
private mysql_xdevapi\CollectionModify::__construct()
```

Modifies (updates) a collection and is instantiated by the `mysql_xdevapi\Collection::modify()` method.

## Parameters

This function has no parameters.

## Examples

**`mysql_xdevapi\CollectionModify::__construct()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");
$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();

$schema     = $session->getSchema("addressbook");
$collection = $schema->createCollection("people");

$result = $collection
  ->add(
  '{"name":   "Bernie",
    "traits": ["Friend", "Brother", "Human"]}') 
  ->execute();

$collection
  ->modify("name in ('Bernie', 'Jane')")
  ->arrayAppend('traits', 'Happy')
  ->execute();

$result = $collection
  ->find()
  ->execute();

print_r($result->fetchAll());
?>

   
```

The above example will output something similar to:

```text


Array
(
    [0] => Array
        (
            [_id] => 00005b6b5361000000000000010c
            [name] => Bernie
            [traits] => Array
                (
                    [0] => Friend
                    [1] => Brother
                    [2] => Human
                    [3] => Happy
                )
        )
)

   
```
