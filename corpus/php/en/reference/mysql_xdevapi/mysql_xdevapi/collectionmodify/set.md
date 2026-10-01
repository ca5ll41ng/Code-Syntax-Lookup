---
id: "en-php-function-mysql-xdevapi-collectionmodify-set"
language: "php"
lang: "en"
category: "function"
name: "CollectionModify::set"
title: "Set document attribute"
signature: "public mysql_xdevapi\\CollectionModify mysql_xdevapi\\CollectionModify::set(string $collection_field, string $expression_or_literal)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-collectionmodify.set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set document attribute

## Description

```php
public mysql_xdevapi\CollectionModify mysql_xdevapi\CollectionModify::set(string $collection_field, string $expression_or_literal)
```

Sets or updates attributes on documents in a collection.

## Parameters

- **`$collection_field`** — The document path (name) of the item to set.
- **`$expression_or_literal`** — The value to set it to.

## Return Values

A CollectionModify object.

## Examples

**`mysql_xdevapi\CollectionModify::set()` example**

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
  ->modify("name = :name")
  ->bind(['name' => 'Bernie'])
  ->set("name", "Bern")
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
            [_id] => 00005b6b53610000000000000111
            [name] => Bern
            [traits] => Array
                (
                    [0] => Friend
                    [1] => Brother
                    [2] => Human
                )
        )
)

   
```
