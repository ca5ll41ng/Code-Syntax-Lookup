---
id: "en-php-function-mysql-xdevapi-tableselect-lockshared"
language: "php"
lang: "en"
category: "function"
name: "TableSelect::lockShared"
title: "Execute SHARED LOCK"
signature: "public mysql_xdevapi\\TableSelect mysql_xdevapi\\TableSelect::lockShared([int $lock_waiting_option = ...])"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-tableselect.lockshared.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Execute SHARED LOCK

## Description

```php
public mysql_xdevapi\TableSelect mysql_xdevapi\TableSelect::lockShared([int $lock_waiting_option = ...])
```

Execute a read operation with SHARED LOCK. Only one lock can be active at a time.

## Parameters

- **`$lock_waiting_option`** — The optional waiting option that defaults to `MYSQLX_LOCK_DEFAULT`. Valid values are:
  - `MYSQLX_LOCK_DEFAULT`
  - `MYSQLX_LOCK_NOWAIT`
  - `MYSQLX_LOCK_SKIP_LOCKED`



## Return Values

A TableSelect object.

## Examples

**`mysql_xdevapi\TableSelect::lockShared()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$schema = $session->getSchema("addressbook");
$table  = $schema->getTable("names");

$session->startTransaction();

$result = $table->select('name', 'age')
  ->lockShared(MYSQLX_LOCK_NOWAIT)
  ->execute();

$session->commit();

$row = $result->fetchAll();
print_r($row);
?>

   
```

The above example will output something similar to:

```text


Array
(
    [0] => Array
        (
            [name] => John
            [age] => 42
        )
    [1] => Array
        (
            [name] => Sam
            [age] => 42
        )
)

   
```
