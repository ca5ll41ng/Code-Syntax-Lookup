---
id: "en-php-function-function-db2-prepare"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["sql_injection"],"cwe":["CWE-89"],"params":[2]}
name: "db2_prepare"
title: "Prepares an SQL statement to be executed"
signature: "resource|false db2_prepare(resource $connection, string $statement, array $options = [])"
module: "ibm_db2"
source_url: "https://www.php.net/manual/en/function.db2-prepare.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Prepares an SQL statement to be executed

## Description

```php
resource|false db2_prepare(resource $connection, string $statement, array $options = [])
```

`db2_prepare()` creates a prepared SQL statement which can include 0 or more parameter markers (`?` characters) representing parameters for input, output, or input/output. You can pass parameters to the prepared statement using `db2_bind_param()`, or for input values only, as an array passed to `db2_execute()`.

There are three main advantages to using prepared statements in your application:

- *Performance*: when you prepare a statement, the database server creates an optimized access plan for retrieving data with that statement. Subsequently issuing the prepared statement with `db2_execute()` enables the statements to reuse that access plan and avoids the overhead of dynamically creating a new access plan for every statement you issue.
- *Security*: when you prepare a statement, you can include parameter markers for input values. When you execute a prepared statement with input values for placeholders, the database server checks each input value to ensure that the type matches the column definition or parameter definition.
- *Advanced functionality*: Parameter markers not only enable you to pass input values to prepared SQL statements, they also enable you to retrieve OUT and INOUT parameters from stored procedures using `db2_bind_param()`.

## Parameters

- **`$connection`** — A valid database connection resource variable as returned from `db2_connect()` or `db2_pconnect()`.
- **`$statement`** — An SQL statement, optionally containing one or more parameter markers..
- **`$options`** — An associative array containing statement options. You can use this parameter to request a scrollable cursor on database servers that support this functionality. — For a description of valid statement options, see `db2_set_option()`.

## Return Values

Returns a statement resource if the SQL statement was successfully parsed and prepared by the database server. Returns `false` if the database server returned an error. You can determine which error was returned by calling `db2_stmt_error()` or `db2_stmt_errormsg()`.

## Examples

**Preparing and executing an SQL statement with parameter markers**

The following example prepares an INSERT statement that accepts four parameter markers, then iterates over an array of arrays containing the input values to be passed to `db2_execute()`.

```php


<?php
$animals = array(
    array(0, 'cat', 'Pook', 3.2),
    array(1, 'dog', 'Peaches', 12.3),
    array(2, 'horse', 'Smarty', 350.0),
);

$insert = 'INSERT INTO animals (id, breed, name, weight)
    VALUES (?, ?, ?, ?)';
$stmt = db2_prepare($conn, $insert);
if ($stmt) {
    foreach ($animals as $animal) {
        $result = db2_execute($stmt, $animal);
    }
}
?>

   
```

## See Also

 `db2_bind_param()` `db2_execute()` `db2_stmt_error()` `db2_stmt_errormsg()`
