---
id: "en-php-function-function-cubrid-prepare"
language: "php"
lang: "en"
category: "function"
name: "cubrid_prepare"
title: "Prepare a SQL statement for execution"
signature: "resource cubrid_prepare(resource $conn_identifier, string $prepare_stmt, int $option = 0)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-prepare.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Prepare a SQL statement for execution

## Description

```php
resource cubrid_prepare(resource $conn_identifier, string $prepare_stmt, int $option = 0)
```

The `cubrid_prepare()` function compiles a SQL statement for a given connection handle and returns a handle that represents the pre-compiled statement.

A prepared statement can be executed several times, which is efficient for repeated execution or for processing long data. Only a single statement can be used, and a parameter can be marked with a question mark (`?`) at the appropriate place in the SQL statement. Add a parameter when binding a value in the `VALUES` clause of an `INSERT` statement or in the `WHERE` clause. Note that a value can be bound to a parameter only by using the `cubrid_bind()` function.

## Parameters

- **`$conn_identifier`** — Connection identifier.
- **`$prepare_stmt`** — Prepare query.
- **`$option`** — OID return option `CUBRID_INCLUDE_OID`.

## Return Values

Request identifier, if process is successful, or `false` on failure.

## Examples

**`cubrid_prepare()` example**

```php


<?php
$conn = cubrid_connect("localhost", 33000, "demodb");

$sql = <<<EOD
SELECT g.event_code, e.name
FROM game g
JOIN event e ON g.event_code=e.code
WHERE host_year = ? AND event_code NOT IN (SELECT event_code FROM game WHERE host_year=?) GROUP BY event_code;
EOD;

$req = cubrid_prepare($conn, $sql);

cubrid_bind($req, 1, 2004);
cubrid_bind($req, 2, 2000);
cubrid_execute($req);

$row_num = cubrid_num_rows($req);
printf("There are %d event that exits in 2004 olympic but not in 2000. For example:\n\n", $row_num);

printf("%-15s %s\n", "Event_code", "Event_name");
printf("----------------------------\n");

$row = cubrid_fetch_assoc($req);
printf("%-15d %s\n", $row["event_code"], $row["name"]);
$row = cubrid_fetch_assoc($req);
printf("%-15d %s\n", $row["event_code"], $row["name"]);

cubrid_disconnect($conn);
?>

   
```

The above example will output:

```text


There are 27 event that exits in 2004 olympic but not in 2000. For example:

Event_code      Event_name
----------------------------
20063           +91kg
20070           64kg

   
```

## See Also

 `cubrid_execute()` `cubrid_bind()`
