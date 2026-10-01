---
id: "en-php-function-mysqli-error"
language: "php"
lang: "en"
category: "function"
name: "mysqli::$error"
aliases: ["mysqli_error"]
title: "Returns a string description of the last error"
signature: "string()"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli.error.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a string description of the last error

## Description

Object-oriented style

```php
string $mysqli->error;
```

Procedural style

```php
string mysqli_error(mysqli $mysql)
```

Returns the last error message for the most recent MySQLi function call that can succeed or fail.

## Parameters

- **`$mysql`** — Procedural style only: A `mysqli` object returned by `mysqli_connect()` or `mysqli_init()`

## Return Values

A string that describes the error. An empty string if no error occurred.

## Examples

**`$mysqli->error` example**

Object-oriented style

```php


<?php
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

/* check connection */
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}

if (!$mysqli->query("SET a=1")) {
    printf("Error message: %s\n", $mysqli->error);
}

/* close connection */
$mysqli->close();
?>

   
```

Procedural style

```php


<?php
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

if (!mysqli_query($link, "SET a=1")) {
    printf("Error message: %s\n", mysqli_error($link));
}

/* close connection */
mysqli_close($link);
?>

   
```

The above examples will output:

```text


Error message: Unknown system variable 'a'

   
```

## See Also

`mysqli_connect_errno()` `mysqli_connect_error()` `mysqli_errno()` `mysqli_sqlstate()`
