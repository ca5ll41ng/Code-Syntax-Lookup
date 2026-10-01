---
id: "en-php-function-mysqli-stmt-bind-param"
language: "php"
lang: "en"
category: "function"
name: "mysqli_stmt::bind_param"
aliases: ["mysqli_stmt_bind_param"]
title: "Binds variables to a prepared statement as parameters"
signature: "public bool mysqli_stmt::bind_param(string $types, mixed $var, mixed $vars)"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-stmt.bind-param.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Binds variables to a prepared statement as parameters

## Description

Object-oriented style

```php
public bool mysqli_stmt::bind_param(string $types, mixed $var, mixed $vars)
```

Procedural style

```php
bool mysqli_stmt_bind_param(mysqli_stmt $statement, string $types, mixed $var, mixed $vars)
```

Bind variables for the parameter markers in the SQL statement prepared by `mysqli_prepare()` or `mysqli_stmt_prepare()`.

> If data size of a variable exceeds max. allowed packet size (max_allowed_packet), you have to specify `b` in `$types` and use `mysqli_stmt_send_long_data()` to send the data in packets.

> Care must be taken when using `mysqli_stmt_bind_param()` in conjunction with `call_user_func_array()`. Note that `mysqli_stmt_bind_param()` requires parameters to be passed by reference, whereas `call_user_func_array()` can accept as a parameter a list of variables that can represent references or values.

## Parameters

- **`$statement`** — Procedural style only: A `mysqli_stmt` object returned by `mysqli_stmt_init()`.
- **`$types`** — A string that contains one or more characters which specify the types for the corresponding bind variables: | Character | Description | | --- | --- | | i | corresponding variable has type `int` | | d | corresponding variable has type `float` | | s | corresponding variable has type `string` | | b | corresponding variable is a blob and will be sent in packets |
- **`$var`** — The number of variables and length of string `$types` must match the parameters in the statement.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

If mysqli error reporting is enabled (`MYSQLI_REPORT_ERROR`) and the requested operation fails, a warning is generated. If, in addition, the mode is set to `MYSQLI_REPORT_STRICT`, a `mysqli_sql_exception` is thrown instead.

## Examples

**`mysqli_stmt::bind_param()` example**

Object-oriented style

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli('localhost', 'my_user', 'my_password', 'world');

$stmt = $mysqli->prepare("INSERT INTO CountryLanguage VALUES (?, ?, ?, ?)");
$stmt->bind_param('sssd', $code, $language, $official, $percent);

$code = 'DEU';
$language = 'Bavarian';
$official = "F";
$percent = 11.2;

$stmt->execute();

printf("%d row inserted.\n", $stmt->affected_rows);

/* Clean up table CountryLanguage */
$mysqli->query("DELETE FROM CountryLanguage WHERE Language='Bavarian'");
printf("%d row deleted.\n", $mysqli->affected_rows);

   
```

Procedural style

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect('localhost', 'my_user', 'my_password', 'world');

$stmt = mysqli_prepare($link, "INSERT INTO CountryLanguage VALUES (?, ?, ?, ?)");
mysqli_stmt_bind_param($stmt, 'sssd', $code, $language, $official, $percent);

$code = 'DEU';
$language = 'Bavarian';
$official = "F";
$percent = 11.2;

mysqli_stmt_execute($stmt);

printf("%d row inserted.\n", mysqli_stmt_affected_rows($stmt));

/* Clean up table CountryLanguage */
mysqli_query($link, "DELETE FROM CountryLanguage WHERE Language='Bavarian'");
printf("%d row deleted.\n", mysqli_affected_rows($link));

   
```

The above examples will output:

```text


1 row inserted.
1 row deleted.

   
```

**Using `...` to provide arguments**

The `...` operator can be used to provide variable-length argument list, e.g. in a `WHERE IN` clause.

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli('localhost', 'my_user', 'my_password', 'world');

$stmt = $mysqli->prepare("SELECT Language FROM CountryLanguage WHERE CountryCode IN (?, ?)");
/* Using ... to provide arguments */
$stmt->bind_param('ss', ...['DEU', 'POL']);
$stmt->execute();
$stmt->store_result();

printf("%d rows found.\n", $stmt->num_rows());

   
```

The above examples will output:

```text


10 rows found.

   
```

## See Also

`mysqli_stmt_bind_result()` `mysqli_stmt_execute()` `mysqli_stmt_fetch()` `mysqli_prepare()` `mysqli_stmt_send_long_data()` `mysqli_stmt_errno()` `mysqli_stmt_error()`
