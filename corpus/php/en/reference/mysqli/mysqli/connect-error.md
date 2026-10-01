---
id: "en-php-function-mysqli-connect-error"
language: "php"
lang: "en"
category: "function"
name: "mysqli::$connect_error"
aliases: ["mysqli_connect_error"]
title: "Returns a description of the last connection error"
signature: "string|null()"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli.connect-error.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a description of the last connection error

## Description

Object-oriented style

```php
string|null $mysqli->connect_error;
```

Procedural style

```php
string|null mysqli_connect_error()
```

Returns the error message from the last connection attempt.

## Parameters

This function has no parameters.

## Return Values

A string that describes the error. `null` is returned if no error occurred.

Returns the last connection error regardless of the instance on which it is called.

## Examples

**`$mysqli->connect_error` example**

Object-oriented style

```php


<?php

mysqli_report(MYSQLI_REPORT_OFF);
/* @ is used to suppress warnings */
$mysqli = @new mysqli('localhost', 'fake_user', 'wrong_password', 'does_not_exist');
if ($mysqli->connect_error) {
    /* Use your preferred error logging method here */
    error_log('Connection error: ' . $mysqli->connect_error);
}

   
```

Procedural style

```php


<?php

mysqli_report(MYSQLI_REPORT_OFF);
/* @ is used to suppress warnings */
$link = @mysqli_connect('localhost', 'fake_user', 'wrong_password', 'does_not_exist');
if (!$link) {
    /* Use your preferred error logging method here */
    error_log('Connection error: ' . mysqli_connect_error());
}

   
```

## See Also

`mysqli_connect()` `mysqli_connect_errno()` `mysqli_errno()` `mysqli_error()` `mysqli_sqlstate()`
