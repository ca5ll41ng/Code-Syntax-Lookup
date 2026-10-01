---
id: "en-php-function-mysqli-get-warnings"
language: "php"
lang: "en"
category: "function"
name: "mysqli::get_warnings"
aliases: ["mysqli_get_warnings"]
title: "Get result of SHOW WARNINGS"
signature: "public mysqli_warning|false mysqli::get_warnings()"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli.get-warnings.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get result of SHOW WARNINGS

## Description

Object-oriented style

```php
public mysqli_warning|false mysqli::get_warnings()
```

Procedural style

```php
mysqli_warning|false mysqli_get_warnings(mysqli $mysql)
```

Returns a singly linked list comprised of `mysqli_warning` or `false` if there are no warnings. Each object in the list corresponds to a single line from the result of SHOW WARNINGS. Calling `mysqli_warning::next()` will refill the object with the values from the next row.

> To retrieve warning messages, it is recommended to use the SQL command `SHOW WARNINGS [limit row_count]` instead of this function.

> The linked list cannot be rewound or retrieved again.

## Parameters

- **`$mysql`** — Procedural style only: A `mysqli` object returned by `mysqli_connect()` or `mysqli_init()`

## Return Values

Returns a singly linked list comprised of `mysqli_warning` or `false` if there are no warnings.

## Examples

**Traversing the linked list to fetch all warnings**

Object-oriented style

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$mysqli->query("SELECT 1/0, CAST('NULL' AS UNSIGNED)");

if ($mysqli->warning_count > 0) {
    $warning = $mysqli->get_warnings();
    if ($warning !== false) {
        do {
            printf("Error number: %s\n", $warning->errno);
            printf("Message: %s\n", $warning->message);
        } while ($warning->next());
    }
}

   
```

Procedural style

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "user", "password", "test");

mysqli_query($link, "SELECT 1/0, CAST('NULL' AS UNSIGNED)");

if (mysqli_warning_count($link) > 0) {
    $warning = mysqli_get_warnings($link);
    if ($warning !== false) {
        do {
            printf("Error number: %s\n", $warning->errno);
            printf("Message: %s\n", $warning->message);
        } while ($warning->next());
    }
}

   
```

The above examples will output:

```text


Error number: 1365
Message: Division by 0
Error number: 1292
Message: Truncated incorrect INTEGER value: 'NULL'

   
```
