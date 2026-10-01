---
id: "en-php-function-mysqli-error-list"
language: "php"
lang: "en"
category: "function"
name: "mysqli::$error_list"
aliases: ["mysqli_error_list"]
title: "Returns a list of errors from the last command executed"
signature: "array()"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli.error-list.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a list of errors from the last command executed

## Description

Object-oriented style

```php
array $mysqli->error_list;
```

Procedural style

```php
array mysqli_error_list(mysqli $mysql)
```

Returns an array of errors for the most recent MySQLi function call that can succeed or fail.

## Parameters

- **`$mysql`** — Procedural style only: A `mysqli` object returned by `mysqli_connect()` or `mysqli_init()`

## Return Values

A list of errors, each as an associative `array` containing the errno, error, and sqlstate.

## Examples

**`$mysqli->error_list` example**

Object-oriented style

```php


<?php
$mysqli = new mysqli("localhost", "nobody", "");

/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

if (!$mysqli->query("SET a=1")) {
    print_r($mysqli->error_list);
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
    print_r(mysqli_error_list($link));
}

/* close connection */
mysqli_close($link);
?>

   
```

The above examples will output:

```text


Array
(
    [0] => Array
        (
            [errno] => 1193
            [sqlstate] => HY000
            [error] => Unknown system variable 'a'
        )

)

   
```

## See Also

`mysqli_connect_errno()` `mysqli_connect_error()` `mysqli_error()` `mysqli_sqlstate()`
