---
id: "en-php-function-mysqli-stmt-error"
language: "php"
lang: "en"
category: "function"
name: "mysqli_stmt::$error"
aliases: ["mysqli_stmt_error"]
title: "Returns a string description for last statement error"
signature: "string()"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-stmt.error.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a string description for last statement error

## Description

Object-oriented style

```php
string $mysqli_stmt->error;
```

Procedural style

```php
string mysqli_stmt_error(mysqli_stmt $statement)
```

Returns a string containing the error message for the most recently invoked statement function that can succeed or fail.

## Parameters

- **`$statement`** — Procedural style only: A `mysqli_stmt` object returned by `mysqli_stmt_init()`.

## Return Values

A string that describes the error. An empty string if no error occurred.

## Examples

**Object-oriented style**

```php


<?php
/* Open a connection */
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

$mysqli->query("CREATE TABLE myCountry LIKE Country");
$mysqli->query("INSERT INTO myCountry SELECT * FROM Country");


$query = "SELECT Name, Code FROM myCountry ORDER BY Name";
if ($stmt = $mysqli->prepare($query)) {

    /* drop table */
    $mysqli->query("DROP TABLE myCountry");

    /* execute query */
    $stmt->execute();

    printf("Error: %s.\n", $stmt->error);

    /* close statement */
    $stmt->close();
}

/* close connection */
$mysqli->close();
?>

   
```

**Procedural style**

```php


<?php
/* Open a connection */
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

mysqli_query($link, "CREATE TABLE myCountry LIKE Country");
mysqli_query($link, "INSERT INTO myCountry SELECT * FROM Country");


$query = "SELECT Name, Code FROM myCountry ORDER BY Name";
if ($stmt = mysqli_prepare($link, $query)) {

    /* drop table */
    mysqli_query($link, "DROP TABLE myCountry");

    /* execute query */
    mysqli_stmt_execute($stmt);

    printf("Error: %s.\n", mysqli_stmt_error($stmt));

    /* close statement */
    mysqli_stmt_close($stmt);
}

/* close connection */
mysqli_close($link);
?>

   
```

The above examples will output:

```text


Error: Table 'world.myCountry' doesn't exist.

   
```

## See Also

`mysqli_stmt_errno()` `mysqli_stmt_sqlstate()`
