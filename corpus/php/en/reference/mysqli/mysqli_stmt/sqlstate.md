---
id: "en-php-function-mysqli-stmt-sqlstate"
language: "php"
lang: "en"
category: "function"
name: "mysqli_stmt::$sqlstate"
aliases: ["mysqli_stmt_sqlstate"]
title: "Returns SQLSTATE error from previous statement operation"
signature: "string()"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-stmt.sqlstate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns SQLSTATE error from previous statement operation

## Description

Object-oriented style

```php
string $mysqli_stmt->sqlstate;
```

Procedural style

```php
string mysqli_stmt_sqlstate(mysqli_stmt $statement)
```

Returns a string containing the SQLSTATE error code for the most recently invoked prepared statement function that can succeed or fail. The error code consists of five characters. `'00000'` means no error. The values are specified by ANSI SQL and ODBC. For a list of possible values, see []().

## Parameters

- **`$statement`** — Procedural style only: A `mysqli_stmt` object returned by `mysqli_stmt_init()`.

## Return Values

Returns a string containing the SQLSTATE error code for the last error. The error code consists of five characters. `'00000'` means no error.

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

    printf("Error: %s.\n", $stmt->sqlstate);

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

    printf("Error: %s.\n", mysqli_stmt_sqlstate($stmt));

    /* close statement */
    mysqli_stmt_close($stmt);
}

/* close connection */
mysqli_close($link);
?>

   
```

The above examples will output:

```text


Error: 42S02.

   
```

## Notes

> Note that not all MySQL errors are yet mapped to SQLSTATEs. The value `HY000` (general error) is used for unmapped errors.

## See Also

`mysqli_stmt_errno()` `mysqli_stmt_error()`
