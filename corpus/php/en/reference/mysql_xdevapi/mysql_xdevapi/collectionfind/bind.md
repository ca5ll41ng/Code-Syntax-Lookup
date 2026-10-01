---
id: "en-php-function-mysql-xdevapi-collectionfind-bind"
language: "php"
lang: "en"
category: "function"
name: "CollectionFind::bind"
title: "Bind value to query placeholder"
signature: "public mysql_xdevapi\\CollectionFind mysql_xdevapi\\CollectionFind::bind(array $placeholder_values)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-collectionfind.bind.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Bind value to query placeholder

## Description

```php
public mysql_xdevapi\CollectionFind mysql_xdevapi\CollectionFind::bind(array $placeholder_values)
```

It allows the user to bind a parameter to the placeholder in the search condition of the find operation. The placeholder has the form of :NAME where ':' is a common prefix that must always exists before any NAME, NAME is the actual name of the placeholder. The bind function accepts a list of placeholders if multiple entities have to be substituted in the search condition.

## Parameters

- **`$placeholder_values`** — Values to substitute in the search condition; multiple values are allowed and are passed as an array where "PLACEHOLDER_NAME => PLACEHOLDER_VALUE".

## Return Values

A CollectionFind object, or chain with execute() to return a Result object.

## Examples

**`mysql_xdevapi\CollectionFind::bind()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");
$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();

$schema = $session->getSchema("addressbook");
$create = $schema->createCollection("people");
$result = $create
  ->add('{"name": "Alfred", "age": 18, "job": "Butler"}')
  ->execute();

// ...

$collection = $schema->getCollection("people");

$result = $collection
  ->find('job like :job and age > :age')
  ->bind(['job' => 'Butler', 'age' => 16])
  ->execute();

var_dump($result->fetchAll());
?>

   
```

The above example will output something similar to:

```text


array(1) {
  [0]=>
  array(4) {
    ["_id"]=>
    string(28) "00005b6b536100000000000000cf"
    ["age"]=>
    int(18)
    ["job"]=>
    string(6) "Butler"
    ["name"]=>
    string(6) "Alfred"
  }
}

   
```
