---
id: "en-php-function-mysql-xdevapi-executable-execute"
language: "php"
lang: "en"
category: "function"
name: "Executable::execute"
title: "Execute statement"
signature: "abstract public mysql_xdevapi\\Result mysql_xdevapi\\Executable::execute()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-executable.execute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Execute statement

## Description

```php
abstract public mysql_xdevapi\Result mysql_xdevapi\Executable::execute()
```

Execute the statement from either a collection operation or a table query; this functionality allows for method chaining.

## Parameters

This function has no parameters.

## Return Values

One of the Result objects, such as Result or SqlStatementResult.

## Examples

**execute() examples**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$result_sql = $session->sql("CREATE DATABASE addressbook")->execute();

var_dump($result_sql);


$schema     = $session->getSchema("addressbook");
$collection = $schema->createCollection("humans");

$result_collection = $collection->add(
  '{"name": "Jane",
    "jobs": [{"title":"Scientist","Salary":18000}, {"title":"Mother","Salary":0}],
    "hobbies": ["Walking","Making pies"]}');

$result_collection_executed = $result_collection->execute();

var_dump($result_collection);
var_dump($result_collection_executed);
?>

   
```

The above example will output something similar to:

```text


object(mysql_xdevapi\SqlStatementResult)#3 (0) {
}

object(mysql_xdevapi\CollectionAdd)#5 (0) {
}

object(mysql_xdevapi\Result)#7 (0) {
}

   
```
