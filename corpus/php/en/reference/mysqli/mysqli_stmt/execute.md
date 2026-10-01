---
id: "en-php-function-mysqli-stmt-execute"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["sql_injection"],"cwe":["CWE-89"],"params":[1]}
name: "mysqli_stmt::execute"
aliases: ["mysqli_stmt_execute"]
title: "Executes a prepared statement"
signature: "public bool mysqli_stmt::execute(array|null $params = null)"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-stmt.execute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Executes a prepared statement

## Description

Object-oriented style

```php
public bool mysqli_stmt::execute(array|null $params = null)
```

Procedural style

```php
bool mysqli_stmt_execute(mysqli_stmt $statement, array|null $params = null)
```

Executes a previously prepared statement. The statement must be successfully prepared prior to execution, using either the `mysqli_prepare()` or `mysqli_stmt_prepare()` function, or by passing the second argument to `mysqli_stmt::__construct()`.

If the statement is `UPDATE`, `DELETE`, or `INSERT`, the total number of affected rows can be determined by using the `mysqli_stmt_affected_rows()` function. If the query yields a result set, it can be fetched using `mysqli_stmt_get_result()` function or by fetching it row by row directly from the statement using `mysqli_stmt_fetch()` function.

## Parameters

- **`$statement`** — Procedural style only: A `mysqli_stmt` object returned by `mysqli_stmt_init()`.
- **`$params`** — An optional list `array` with as many elements as there are bound parameters in the SQL statement being executed. Each value is treated as a `string`.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

If mysqli error reporting is enabled (`MYSQLI_REPORT_ERROR`) and the requested operation fails, a warning is generated. If, in addition, the mode is set to `MYSQLI_REPORT_STRICT`, a `mysqli_sql_exception` is thrown instead.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The optional `$params` parameter has been added. |

## Examples

**Execute a prepared statement with bound variables**

Object-oriented style

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$mysqli->query("CREATE TEMPORARY TABLE myCity LIKE City");

/* Prepare an insert statement */
$stmt = $mysqli->prepare("INSERT INTO myCity (Name, CountryCode, District) VALUES (?,?,?)");

/* Bind variables to parameters */
$stmt->bind_param("sss", $val1, $val2, $val3);

$val1 = 'Stuttgart';
$val2 = 'DEU';
$val3 = 'Baden-Wuerttemberg';

/* Execute the statement */
$stmt->execute();

$val1 = 'Bordeaux';
$val2 = 'FRA';
$val3 = 'Aquitaine';

/* Execute the statement */
$stmt->execute();

/* Retrieve all rows from myCity */
$query = "SELECT Name, CountryCode, District FROM myCity";
$result = $mysqli->query($query);
while ($row = $result->fetch_row()) {
    printf("%s (%s,%s)\n", $row[0], $row[1], $row[2]);
}

   
```

Procedural style

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

mysqli_query($link, "CREATE TEMPORARY TABLE myCity LIKE City");

/* Prepare an insert statement */
$stmt = mysqli_prepare($link, "INSERT INTO myCity (Name, CountryCode, District) VALUES (?,?,?)");

/* Bind variables to parameters */
mysqli_stmt_bind_param($stmt, "sss", $val1, $val2, $val3);

$val1 = 'Stuttgart';
$val2 = 'DEU';
$val3 = 'Baden-Wuerttemberg';

/* Execute the statement */
mysqli_stmt_execute($stmt);

$val1 = 'Bordeaux';
$val2 = 'FRA';
$val3 = 'Aquitaine';

/* Execute the statement */
mysqli_stmt_execute($stmt);

/* Retrieve all rows from myCity */
$query = "SELECT Name, CountryCode, District FROM myCity";
$result = mysqli_query($link, $query);
while ($row = mysqli_fetch_row($result)) {
    printf("%s (%s,%s)\n", $row[0], $row[1], $row[2]);
}

     
```

The above examples will output:

```text


Stuttgart (DEU,Baden-Wuerttemberg)
Bordeaux (FRA,Aquitaine)

   
```

**Execute a prepared statement with an array of values**

Object-oriented style

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli('localhost', 'my_user', 'my_password', 'world');

$mysqli->query('CREATE TEMPORARY TABLE myCity LIKE City');

/* Prepare an insert statement */
$stmt = $mysqli->prepare('INSERT INTO myCity (Name, CountryCode, District) VALUES (?,?,?)');

/* Execute the statement */
$stmt->execute(['Stuttgart', 'DEU', 'Baden-Wuerttemberg']);

/* Retrieve all rows from myCity */
$query = 'SELECT Name, CountryCode, District FROM myCity';
$result = $mysqli->query($query);
while ($row = $result->fetch_row()) {
    printf("%s (%s,%s)\n", $row[0], $row[1], $row[2]);
}

   
```

Procedural style

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect('localhost', 'my_user', 'my_password', 'world');

mysqli_query($link, 'CREATE TEMPORARY TABLE myCity LIKE City');

/* Prepare an insert statement */
$stmt = mysqli_prepare($link, 'INSERT INTO myCity (Name, CountryCode, District) VALUES (?,?,?)');

/* Execute the statement */
mysqli_stmt_execute($stmt, ['Stuttgart', 'DEU', 'Baden-Wuerttemberg']);

/* Retrieve all rows from myCity */
$query = 'SELECT Name, CountryCode, District FROM myCity';
$result = mysqli_query($link, $query);
while ($row = mysqli_fetch_row($result)) {
    printf("%s (%s,%s)\n", $row[0], $row[1], $row[2]);
}

   
```

The above examples will output:

```text


Stuttgart (DEU,Baden-Wuerttemberg)

   
```

## See Also

`mysqli_execute_query()` `mysqli_prepare()` `mysqli_stmt_bind_param()` `mysqli_stmt_get_result()`
