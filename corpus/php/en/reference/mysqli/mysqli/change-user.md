---
id: "en-php-function-mysqli-change-user"
language: "php"
lang: "en"
category: "function"
name: "mysqli::change_user"
aliases: ["mysqli_change_user"]
title: "Changes the user of the database connection"
signature: "public bool mysqli::change_user(string $username, string $password, string|null $database)"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli.change-user.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Changes the user of the database connection

## Description

Object-oriented style

```php
public bool mysqli::change_user(string $username, string $password, string|null $database)
```

Procedural style

```php
bool mysqli_change_user(mysqli $mysql, string $username, string $password, string|null $database)
```

Attempts to connect to the specified database using the provided credentials.

In comparison to `mysqli::connect()`, this method will not disconnect the current connection if the new connection cannot be opened.

In order to successfully change users, a valid `$username` and `$password` must be provided, and that user must have sufficient permissions to access the desired database. If for any reason authorization fails, the current user authentication will remain.

## Parameters

- **`$mysql`** — Procedural style only: A `mysqli` object returned by `mysqli_connect()` or `mysqli_init()`
- **`$username`** — The MySQL user name.
- **`$password`** — The MySQL password.
- **`$database`** — The database name. If `null` or an empty string is passed, the connection to the server will be opened with no default database.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

If mysqli error reporting is enabled (`MYSQLI_REPORT_ERROR`) and the requested operation fails, a warning is generated. If, in addition, the mode is set to `MYSQLI_REPORT_STRICT`, a `mysqli_sql_exception` is thrown instead.

## Examples

**Resetting the connection session**

Object-oriented style

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "test");

$mysqli->query("SET @a:=1");

$mysqli->change_user("my_user", "my_password", "world");

$result = $mysqli->query("SELECT DATABASE()");
$row = $result->fetch_row();
printf("Default database: %s\n", $row[0]);

$result = $mysqli->query("SELECT @a");
$row = $result->fetch_row();
if ($row[0] === null) {
    printf("Value of variable a is NULL\n");
}

   
```

Procedural style

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "test");

mysqli_query($link, "SET @a:=1");

mysqli_change_user($link, "my_user", "my_password", "world");

$result = mysqli_query($link, "SELECT DATABASE()");
$row = mysqli_fetch_row($result);
printf("Default database: %s\n", $row[0]);

$result = mysqli_query($link, "SELECT @a");
$row = mysqli_fetch_row($result);
if ($row[0] === null) {
    printf("Value of variable a is NULL\n");
}

   
```

The above examples will output:

```text


Default database: world
Value of variable a is NULL

   
```

**If `$database` is `null` the connection is opened without selecting any default database**

Object-oriented style

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "test");

$mysqli->change_user("my_user", "my_password", null);

$result = $mysqli->query("SELECT DATABASE()");
$row = $result->fetch_row();
printf("Default database: %s\n", $row[0]);

   
```

The above examples will output:

```text


Default database:

   
```

## Notes

> Using this command will always cause the current database connection to behave as if it was a completely new database connection, regardless of if the operation was completed successfully. This reset includes performing a rollback on any active transactions, closing all temporary tables, and unlocking all locked tables.

## See Also

`mysqli_connect()` `mysqli_select_db()`
