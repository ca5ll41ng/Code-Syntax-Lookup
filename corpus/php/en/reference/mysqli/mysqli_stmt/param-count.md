---
id: "en-php-function-mysqli-stmt-param-count"
language: "php"
lang: "en"
category: "function"
name: "mysqli_stmt::$param_count"
aliases: ["mysqli_stmt_param_count"]
title: "Returns the number of parameters for the given statement"
signature: "int()"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-stmt.param-count.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the number of parameters for the given statement

## Description

Object-oriented style

```php
int $mysqli_stmt->param_count;
```

Procedural style

```php
int mysqli_stmt_param_count(mysqli_stmt $statement)
```

Returns the number of parameter markers present in the prepared statement.

## Parameters

- **`$statement`** — Procedural style only: A `mysqli_stmt` object returned by `mysqli_stmt_init()`.

## Return Values

Returns an integer representing the number of parameters.

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

if ($stmt = $mysqli->prepare("SELECT Name FROM Country WHERE Name=? OR Code=?")) {

    $marker = $stmt->param_count;
    printf("Statement has %d markers.\n", $marker);

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

if ($stmt = mysqli_prepare($link, "SELECT Name FROM Country WHERE Name=? OR Code=?")) {

    $marker = mysqli_stmt_param_count($stmt);
    printf("Statement has %d markers.\n", $marker);

    /* close statement */
    mysqli_stmt_close($stmt);
}

/* close connection */
mysqli_close($link);
?>

   
```

The above examples will output:

```text


Statement has 2 markers.

   
```

## See Also

`mysqli_prepare()`
