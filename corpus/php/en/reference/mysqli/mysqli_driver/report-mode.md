---
id: "en-php-function-mysqli-driver-report-mode"
language: "php"
lang: "en"
category: "function"
name: "mysqli_driver::$report_mode"
aliases: ["mysqli_report"]
title: "Sets mysqli error reporting mode"
signature: "int()"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-driver.report-mode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets mysqli error reporting mode

## Description

Object-oriented style

```php
int $mysqli_driver->report_mode;
```

Procedural style

```php
true mysqli_report(int $flags)
```

Depending on the flags, it sets mysqli error reporting mode to exception, warning or none. When set to `MYSQLI_REPORT_ALL` or `MYSQLI_REPORT_INDEX` it will also inform about queries that don't use an index (or use a bad index).

As of PHP 8.1.0, the default setting is `MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT`. Previously, it was `MYSQLI_REPORT_OFF`.

## Parameters

- **`$flags`** — | Name | Description | | --- | --- | | `MYSQLI_REPORT_OFF` | Turns reporting off | | `MYSQLI_REPORT_ERROR` | Report errors from mysqli function calls | | `MYSQLI_REPORT_STRICT` | Throw `mysqli_sql_exception` for errors instead of warnings | | `MYSQLI_REPORT_INDEX` | Report if no index or bad index was used in a query | | `MYSQLI_REPORT_ALL` | Set all options (report all) |

## Return Values

Always returns `true`.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The default value is now `MYSQLI_REPORT_ERROR \| MYSQLI_REPORT_STRICT`. Previously, it was `MYSQLI_REPORT_OFF`. |

## Examples

**Object-oriented style**

```php


<?php

/* activate reporting */
$driver = new mysqli_driver();
$driver->report_mode = MYSQLI_REPORT_ALL;

try {
    /* if the connection fails, a mysqli_sql_exception will be thrown */
    $mysqli = new mysqli("localhost", "my_user", "my_password", "my_db");

    /* this query should report an error */
    $result = $mysqli->query("SELECT Name FROM Nonexistingtable WHERE population > 50000");

    /* this query should report a bad index if the column population doesn't have an index */
    $result = $mysqli->query("SELECT Name FROM City WHERE population > 50000");
} catch (mysqli_sql_exception $e) {
    error_log($e->__toString());
}

   
```

**Procedural style**

```php


<?php

/* activate reporting */
mysqli_report(MYSQLI_REPORT_ALL);

try {
    /* if the connection fails, a mysqli_sql_exception will be thrown */
    $link = mysqli_connect("localhost", "my_user", "my_password", "my_db");

    /* this query should report an error */
    $result = mysqli_query($link, "SELECT Name FROM Nonexistingtable WHERE population > 50000");

    /* this query should report a bad index if the column population doesn't have an index */
    $result = mysqli_query($link, "SELECT Name FROM City WHERE population > 50000");
} catch (mysqli_sql_exception $e) {
    error_log($e->__toString());
}

   
```

**Error reporting except bad index errors**

```php


<?php

/* activate reporting */
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

try {
    /* if the connection fails, a mysqli_sql_exception will be thrown */
    $mysqli = new mysqli("localhost", "my_user", "my_password", "my_db");

    /* this query should report an error */
    $result = $mysqli->query("SELECT Name FROM Nonexistingtable WHERE population > 50000");

    /* this WILL NOT report any errors even if index is not available */
    $result = $mysqli->query("SELECT Name FROM City WHERE population > 50000");
} catch (mysqli_sql_exception $e) {
    error_log($e->__toString());
}

   
```

## See Also

`mysqli_sql_exception` `set_exception_handler()` `error_reporting()`
