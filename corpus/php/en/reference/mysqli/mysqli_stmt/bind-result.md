---
id: "en-php-function-mysqli-stmt-bind-result"
language: "php"
lang: "en"
category: "function"
name: "mysqli_stmt::bind_result"
aliases: ["mysqli_stmt_bind_result"]
title: "Binds variables to a prepared statement for result storage"
signature: "public bool mysqli_stmt::bind_result(mixed $var, mixed $vars)"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-stmt.bind-result.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Binds variables to a prepared statement for result storage

## Description

Object-oriented style

```php
public bool mysqli_stmt::bind_result(mixed $var, mixed $vars)
```

Procedural style

```php
bool mysqli_stmt_bind_result(mysqli_stmt $statement, mixed $var, mixed $vars)
```

Binds columns in the result set to variables.

When `mysqli_stmt_fetch()` is called to fetch data, the MySQL client/server protocol places the data for the bound columns into the specified variables `$var`/`$vars`.

A column can be bound or rebound at any time, even after a result set has been partially retrieved. The new binding takes effect the next time `mysqli_stmt_fetch()` is called.

> All columns must be bound after `mysqli_stmt_execute()` and prior to calling `mysqli_stmt_fetch()`.

> Depending on column types bound variables can silently change to the corresponding PHP type.

> This function is useful for simple results. To retrieve an iterable result set, or fetch each row as an array or object, use `mysqli_stmt_get_result()`.

## Parameters

- **`$statement`** — Procedural style only: A `mysqli_stmt` object returned by `mysqli_stmt_init()`.
- **`$var`** — The first variable to be bound.
- **`$vars`** — Further variables to be bound.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Object-oriented style**

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

/* prepare statement */
$stmt = $mysqli->prepare("SELECT Code, Name FROM Country ORDER BY Name LIMIT 5");
$stmt->execute();

/* bind variables to prepared statement */
$stmt->bind_result($col1, $col2);

/* fetch values */
while ($stmt->fetch()) {
    printf("%s %s\n", $col1, $col2);
}

   
```

**Procedural style**

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

/* prepare statement */
$stmt = mysqli_prepare($link, "SELECT Code, Name FROM Country ORDER BY Name LIMIT 5");
mysqli_stmt_execute($stmt);

/* bind variables to prepared statement */
mysqli_stmt_bind_result($stmt, $col1, $col2);

/* fetch values */
while (mysqli_stmt_fetch($stmt)) {
    printf("%s %s\n", $col1, $col2);
}

   
```

The above examples will output something similar to:

```text


AFG Afghanistan
ALB Albania
DZA Algeria
ASM American Samoa
AND Andorra

   
```

## See Also

`mysqli_stmt_get_result()` `mysqli_stmt_bind_param()` `mysqli_stmt_execute()` `mysqli_stmt_fetch()` `mysqli_prepare()` `mysqli_stmt_prepare()`
