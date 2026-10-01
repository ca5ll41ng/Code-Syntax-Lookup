---
id: "en-php-function-mysqli-execute-query"
language: "php"
lang: "en"
category: "function"
name: "mysqli::execute_query"
aliases: ["mysqli_execute_query"]
title: "Prepares, binds parameters, and executes SQL statement"
signature: "public mysqli_result|bool mysqli::execute_query(string $query, array|null $params = null)"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli.execute-query.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Prepares, binds parameters, and executes SQL statement

## Description

Object-oriented style

```php
public mysqli_result|bool mysqli::execute_query(string $query, array|null $params = null)
```

Procedural style

```php
mysqli_result|bool mysqli_execute_query(mysqli $mysql, string $query, array|null $params = null)
```

Prepares the SQL query, binds parameters, and executes it. The `mysqli::execute_query()` method is a shortcut for `mysqli::prepare()`, `mysqli_stmt::bind_param()`, `mysqli_stmt::execute()`, and `mysqli_stmt::get_result()`.

The statement template can contain zero or more question mark (`?`) parameter markers⁠—also called placeholders. The parameter values must be provided as an `array` using `$params` parameter.

A prepared statement is created under the hood but it's never exposed outside of the function. It's impossible to access properties of the statement as one would do with the `mysqli_stmt` object. Due to this limitation, the status information is copied to the `mysqli` object and is available using its methods, e.g. `mysqli_affected_rows()` or `mysqli_error()`.

> In the case where a statement is passed to `mysqli_execute_query()` that is longer than `max_allowed_packet` of the server, the returned error codes are different depending on the operating system. The behavior is as follows:
>
> - On Linux returns an error code of 1153. The error message means got a packet bigger than `max_allowed_packet` bytes.
> - On Windows returns an error code 2006. This error message means server has gone away.

## Parameters

- **`$mysql`** — Procedural style only: A `mysqli` object returned by `mysqli_connect()` or `mysqli_init()`
- **`$query`** — The query, as a string. It must consist of a single SQL statement. — The SQL statement may contain zero or more parameter markers represented by question mark (`?`) characters at the appropriate positions.
  > The markers are legal only in certain places in SQL statements. For example, they are permitted in the `VALUES()` list of an `INSERT` statement (to specify column values for a row), or in a comparison with a column in a `WHERE` clause to specify a comparison value. However, they are not permitted for identifiers (such as table or column names).


- **`$params`** — An optional list `array` with as many elements as there are bound parameters in the SQL statement being executed. Each value is treated as a `string`.

## Return Values

Returns `false` on failure. For successful queries which produce a result set, such as `SELECT, SHOW, DESCRIBE` or `EXPLAIN`, returns a `mysqli_result` object. For other successful queries, returns `true`.

## Examples

**`mysqli::execute_query()` example**

Object-oriented style

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli('localhost', 'my_user', 'my_password', 'world');

$query = 'SELECT Name, District FROM City WHERE CountryCode=? ORDER BY Name LIMIT 5';
$result = $mysqli->execute_query($query, ['DEU']);
foreach ($result as $row) {
    printf("%s (%s)\n", $row["Name"], $row["District"]);
}

   
```

Procedural style

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

$query = 'SELECT Name, District FROM City WHERE CountryCode=? ORDER BY Name LIMIT 5';
$result = mysqli_execute_query($link, $query, ['DEU']);
foreach ($result as $row) {
    printf("%s (%s)\n", $row["Name"], $row["District"]);
}

   
```

The above examples will output something similar to:

```text


Aachen (Nordrhein-Westfalen)
Augsburg (Baijeri)
Bergisch Gladbach (Nordrhein-Westfalen)
Berlin (Berliini)
Bielefeld (Nordrhein-Westfalen)

   
```

## See Also

`mysqli_prepare()` `mysqli_stmt_execute()` `mysqli_stmt_bind_param()` `mysqli_stmt_get_result()`
