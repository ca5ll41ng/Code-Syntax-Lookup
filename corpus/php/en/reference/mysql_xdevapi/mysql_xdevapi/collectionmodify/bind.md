---
id: "en-php-function-mysql-xdevapi-collectionmodify-bind"
language: "php"
lang: "en"
category: "function"
name: "CollectionModify::bind"
title: "Bind value to query placeholder"
signature: "public mysql_xdevapi\\CollectionModify mysql_xdevapi\\CollectionModify::bind(array $placeholder_values)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-collectionmodify.bind.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Bind value to query placeholder

## Description

```php
public mysql_xdevapi\CollectionModify mysql_xdevapi\CollectionModify::bind(array $placeholder_values)
```

Bind a parameter to the placeholder in the search condition of the modify operation.

The placeholder has the form of :NAME where ':' is a common prefix that must always exists before any NAME where NAME is the name of the placeholder. The bind method accepts a list of placeholders if multiple entities have to be substituted in the search condition of the modify operation.

## Parameters

- **`$placeholder_values`** — Placeholder values to substitute in the search condition. Multiple values are allowed and have to be passed as an array of mappings PLACEHOLDER_NAME->PLACEHOLDER_VALUE.

## Return Values

A CollectionModify object that can be used to execute the command, or to add additional operations.

## Examples

**`mysql_xdevapi\CollectionModify::bind()` example**

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
            [_id] => 00005b6b53610000000000000110
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
