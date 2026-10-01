---
id: "en-php-function-mysqli-stmt-fetch"
language: "php"
lang: "en"
category: "function"
name: "mysqli_stmt::fetch"
aliases: ["mysqli_stmt_fetch"]
title: "Fetch results from a prepared statement into the bound variables"
signature: "public bool|null mysqli_stmt::fetch()"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-stmt.fetch.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fetch results from a prepared statement into the bound variables

## Description

Object-oriented style

```php
public bool|null mysqli_stmt::fetch()
```

Procedural style

```php
bool|null mysqli_stmt_fetch(mysqli_stmt $statement)
```

Fetch the result from a prepared statement into the variables bound by `mysqli_stmt_bind_result()`.

> Note that all columns must be bound by the application before calling `mysqli_stmt_fetch()`.

> Data is transferred unbuffered without calling `mysqli_stmt_store_result()` which can decrease performance (but reduces memory cost).

## Parameters

- **`$statement`** — Procedural style only: A `mysqli_stmt` object returned by `mysqli_stmt_init()`.

## Return Values

| Value | Description |
| --- | --- |
| `true` | Success. Data has been fetched |
| `false` | Error occurred |
| `null` | No more rows/data exists or data truncation occurred |

## Errors/Exceptions

If mysqli error reporting is enabled (`MYSQLI_REPORT_ERROR`) and the requested operation fails, a warning is generated. If, in addition, the mode is set to `MYSQLI_REPORT_STRICT`, a `mysqli_sql_exception` is thrown instead.

## Examples

**Object-oriented style**

```php


<?php
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

$query = "SELECT Name, CountryCode FROM City ORDER by ID DESC LIMIT 150,5";

if ($stmt = $mysqli->prepare($query)) {

    /* execute statement */
    $stmt->execute();

    /* bind result variables */
    $stmt->bind_result($name, $code);

    /* fetch values */
    while ($stmt->fetch()) {
        printf ("%s (%s)\n", $name, $code);
    }

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
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

$query = "SELECT Name, CountryCode FROM City ORDER by ID DESC LIMIT 150,5";

if ($stmt = mysqli_prepare($link, $query)) {

    /* execute statement */
    mysqli_stmt_execute($stmt);

    /* bind result variables */
    mysqli_stmt_bind_result($stmt, $name, $code);

    /* fetch values */
    while (mysqli_stmt_fetch($stmt)) {
        printf ("%s (%s)\n", $name, $code);
    }

    /* close statement */
    mysqli_stmt_close($stmt);
}

/* close connection */
mysqli_close($link);
?>

   
```

The above examples will output:

```text


Rockford (USA)
Tallahassee (USA)
Salinas (USA)
Santa Clarita (USA)
Springfield (USA)

   
```

## See Also

`mysqli_prepare()` `mysqli_stmt_errno()` `mysqli_stmt_error()` `mysqli_stmt_bind_result()`
