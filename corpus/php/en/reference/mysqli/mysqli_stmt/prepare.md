---
id: "en-php-function-mysqli-stmt-prepare"
language: "php"
lang: "en"
category: "function"
name: "mysqli_stmt::prepare"
aliases: ["mysqli_stmt_prepare"]
title: "Prepares an SQL statement for execution"
signature: "public bool mysqli_stmt::prepare(string $query)"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-stmt.prepare.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Prepares an SQL statement for execution

## Description

Object-oriented style

```php
public bool mysqli_stmt::prepare(string $query)
```

Procedural style

```php
bool mysqli_stmt_prepare(mysqli_stmt $statement, string $query)
```

Prepares a statement for execution. The query must consist of a single SQL statement.

The statement template can contain zero or more question mark (`?`) parameter markers⁠—also called placeholders. The parameter markers must be bound to application variables using `mysqli_stmt_bind_param()` before executing the statement.

> In the case where a statement is passed to `mysqli_stmt_prepare()` that is longer than `max_allowed_packet` of the server, the returned error codes are different depending on whether you are using MySQL Native Driver (`mysqlnd`) or MySQL Client Library (`libmysqlclient`). The behavior is as follows:
>
> - `mysqlnd` on Linux returns an error code of 1153. The error message means got a packet bigger than `max_allowed_packet` bytes.
> - `mysqlnd` on Windows returns an error code 2006. This error message means server has gone away.
> - `libmysqlclient` on all platforms returns an error code 2006. This error message means server has gone away.

## Parameters

- **`$statement`** — Procedural style only: A `mysqli_stmt` object returned by `mysqli_stmt_init()`.
- **`$query`** — The query, as a string. It must consist of a single SQL statement. — The SQL statement may contain zero or more parameter markers represented by question mark (`?`) characters at the appropriate positions.
  > The markers are legal only in certain places in SQL statements. For example, they are permitted in the `VALUES()` list of an `INSERT` statement (to specify column values for a row), or in a comparison with a column in a `WHERE` clause to specify a comparison value. However, they are not permitted for identifiers (such as table or column names).



## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

If mysqli error reporting is enabled (`MYSQLI_REPORT_ERROR`) and the requested operation fails, a warning is generated. If, in addition, the mode is set to `MYSQLI_REPORT_STRICT`, a `mysqli_sql_exception` is thrown instead.

## Examples

**`mysqli_stmt::prepare()` example**

Object-oriented style

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$city = "Amersfoort";

/* create a prepared statement */
$stmt = $mysqli->stmt_init();
$stmt->prepare("SELECT District FROM City WHERE Name=?");

/* bind parameters for markers */
$stmt->bind_param("s", $city);

/* execute query */
$stmt->execute();

/* bind result variables */
$stmt->bind_result($district);

/* fetch value */
$stmt->fetch();

printf("%s is in district %s\n", $city, $district);

   
```

Procedural style

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

$city = "Amersfoort";

/* create a prepared statement */
$stmt = mysqli_stmt_init($link);
mysqli_stmt_prepare($stmt, "SELECT District FROM City WHERE Name=?");

/* bind parameters for markers */
mysqli_stmt_bind_param($stmt, "s", $city);

/* execute query */
mysqli_stmt_execute($stmt);

/* bind result variables */
mysqli_stmt_bind_result($stmt, $district);

/* fetch value */
mysqli_stmt_fetch($stmt);

printf("%s is in district %s\n", $city, $district);

   
```

The above examples will output:

```text


Amersfoort is in district Utrecht

   
```

## See Also

`mysqli_stmt_init()` `mysqli_stmt_execute()` `mysqli_stmt_fetch()` `mysqli_stmt_bind_param()` `mysqli_stmt_bind_result()` `mysqli_stmt_get_result()` `mysqli_stmt_close()`
