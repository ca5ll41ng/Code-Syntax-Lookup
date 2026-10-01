---
id: "en-php-function-mysqli-field-count"
language: "php"
lang: "en"
category: "function"
name: "mysqli::$field_count"
aliases: ["mysqli_field_count"]
title: "Returns the number of columns for the most recent query"
signature: "int()"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli.field-count.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the number of columns for the most recent query

## Description

Object-oriented style

```php
int $mysqli->field_count;
```

Procedural style

```php
int mysqli_field_count(mysqli $mysql)
```

Returns the number of columns for the most recent query on the connection represented by the `$mysql` parameter. This function can be useful when using the `mysqli_store_result()` function to determine if the query should have produced a non-empty result set or not without knowing the nature of the query.

## Parameters

- **`$mysql`** — Procedural style only: A `mysqli` object returned by `mysqli_connect()` or `mysqli_init()`

## Return Values

An integer representing the number of fields in a result set.

## Examples

**`$mysqli->field_count` example**

Object-oriented style

```php


<?php
$mysqli = new mysqli("localhost", "my_user", "my_password", "test");

$mysqli->query( "DROP TABLE IF EXISTS friends");
$mysqli->query( "CREATE TABLE friends (id int, name varchar(20))");

$mysqli->query( "INSERT INTO friends VALUES (1,'Hartmut'), (2, 'Ulf')");


$mysqli->real_query("SELECT * FROM friends");

if ($mysqli->field_count) {
    /* this was a select/show or describe query */
    $result = $mysqli->store_result();

    /* process resultset */
    $row = $result->fetch_row();

    /* free resultset */
    $result->close();
}

/* close connection */
$mysqli->close();
?>

   
```

Procedural style

```php


<?php
$link = mysqli_connect("localhost", "my_user", "my_password", "test");

mysqli_query($link, "DROP TABLE IF EXISTS friends");
mysqli_query($link, "CREATE TABLE friends (id int, name varchar(20))");

mysqli_query($link, "INSERT INTO friends VALUES (1,'Hartmut'), (2, 'Ulf')");

mysqli_real_query($link, "SELECT * FROM friends");

if (mysqli_field_count($link)) {
    /* this was a select/show or describe query */
    $result = mysqli_store_result($link);

    /* process resultset */
    $row = mysqli_fetch_row($result);

    /* free resultset */
    mysqli_free_result($result);
}

/* close connection */
mysqli_close($link);
?>

   
```
