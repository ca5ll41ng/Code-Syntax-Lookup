---
id: "en-php-function-mysql-xdevapi-collectionmodify-replace"
language: "php"
lang: "en"
category: "function"
name: "CollectionModify::replace"
title: "Replace document field"
signature: "public mysql_xdevapi\\CollectionModify mysql_xdevapi\\CollectionModify::replace(string $collection_field, string $expression_or_literal)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-collectionmodify.replace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Replace document field

## Description

```php
public mysql_xdevapi\CollectionModify mysql_xdevapi\CollectionModify::replace(string $collection_field, string $expression_or_literal)
```

Replace (update) a given field value with a new one.

## Parameters

- **`$collection_field`** — The document path of the item to set.
- **`$expression_or_literal`** — The value to set on the specified attribute.

## Return Values

A CollectionModify object.

## Examples

**`mysql_xdevapi\CollectionModify::replace()` example**

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
  ->replace("name", "Bern")
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
            [_id] => 00005b6b5361000000000000011b
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
