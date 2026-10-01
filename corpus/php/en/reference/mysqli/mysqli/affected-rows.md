---
id: "en-php-function-mysqli-affected-rows"
language: "php"
lang: "en"
category: "function"
name: "mysqli::$affected_rows"
aliases: ["mysqli_affected_rows"]
title: "Gets the number of affected rows in a previous MySQL operation"
signature: "int|string()"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli.affected-rows.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the number of affected rows in a previous MySQL operation

## Description

Object-oriented style

```php
int|string $mysqli->affected_rows;
```

Procedural style

```php
int|string mysqli_affected_rows(mysqli $mysql)
```

Returns the number of rows affected by the last `INSERT`, `UPDATE`, `REPLACE` or `DELETE` query. Works like `mysqli_num_rows()` for `SELECT` statements.

## Parameters

- **`$mysql`** — Procedural style only: A `mysqli` object returned by `mysqli_connect()` or `mysqli_init()`

## Return Values

An integer greater than zero indicates the number of rows affected or retrieved. Zero indicates that no records were updated for an `UPDATE` statement, no rows matched the `WHERE` clause in the query or that no query has yet been executed. `-1` indicates that the query returned an error or that `mysqli_affected_rows()` was called for an unbuffered `SELECT` query.

> If the number of affected rows is greater than the maximum int value (`PHP_INT_MAX`), the number of affected rows will be returned as a string.

## Examples

**`$mysqli->affected_rows` example**

Object-oriented style

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

/* Insert rows */
$mysqli->query("CREATE TABLE Language SELECT * from CountryLanguage");
printf("Affected rows (INSERT): %d\n", $mysqli->affected_rows);

$mysqli->query("ALTER TABLE Language ADD Status int default 0");

/* update rows */
$mysqli->query("UPDATE Language SET Status=1 WHERE Percentage > 50");
printf("Affected rows (UPDATE): %d\n", $mysqli->affected_rows);

/* delete rows */
$mysqli->query("DELETE FROM Language WHERE Percentage < 50");
printf("Affected rows (DELETE): %d\n", $mysqli->affected_rows);

/* select all rows */
$result = $mysqli->query("SELECT CountryCode FROM Language");
printf("Affected rows (SELECT): %d\n", $mysqli->affected_rows);

/* Delete table Language */
$mysqli->query("DROP TABLE Language");

   
```

Procedural style

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

/* Insert rows */
mysqli_query($link, "CREATE TABLE Language SELECT * from CountryLanguage");
printf("Affected rows (INSERT): %d\n", mysqli_affected_rows($link));

mysqli_query($link, "ALTER TABLE Language ADD Status int default 0");

/* update rows */
mysqli_query($link, "UPDATE Language SET Status=1 WHERE Percentage > 50");
printf("Affected rows (UPDATE): %d\n", mysqli_affected_rows($link));

/* delete rows */
mysqli_query($link, "DELETE FROM Language WHERE Percentage < 50");
printf("Affected rows (DELETE): %d\n", mysqli_affected_rows($link));

/* select all rows */
$result = mysqli_query($link, "SELECT CountryCode FROM Language");
printf("Affected rows (SELECT): %d\n", mysqli_affected_rows($link));

/* Delete table Language */
mysqli_query($link, "DROP TABLE Language");

   
```

The above examples will output:

```text


Affected rows (INSERT): 984
Affected rows (UPDATE): 168
Affected rows (DELETE): 815
Affected rows (SELECT): 169

   
```

## See Also

`mysqli_num_rows()` `mysqli_info()`
