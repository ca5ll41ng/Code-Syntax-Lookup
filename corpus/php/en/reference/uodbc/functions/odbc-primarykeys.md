---
id: "en-php-function-function-odbc-primarykeys"
language: "php"
lang: "en"
category: "function"
name: "odbc_primarykeys"
title: "Gets the primary keys for a table"
signature: "Odbc\\Result|false odbc_primarykeys(Odbc\\Connection $odbc, string|null $catalog, string $schema, string $table)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-primarykeys.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the primary keys for a table

## Description

```php
Odbc\Result|false odbc_primarykeys(Odbc\Connection $odbc, string|null $catalog, string $schema, string $table)
```

Returns a result object that can be used to fetch the column names that comprise the primary key for a table.

## Parameters

- **`$odbc`** — The ODBC connection object, see `odbc_connect()` for details.
- **`$catalog`** — The catalog ('qualifier' in ODBC 2 parlance).
- **`$schema`** — The schema ('owner' in ODBC 2 parlance).
- **`$table`**

## Return Values

Returns an ODBC result object or `false` on failure.

The result set has the following columns:

- `TABLE_CAT`
- `TABLE_SCHEM`
- `TABLE_NAME`
- `COLUMN_NAME`
- `KEY_SEQ`
- `PK_NAME`

Drivers can report additional columns.

The result set is ordered by `TABLE_CAT`, `TABLE_SCHEM`, `TABLE_NAME` and `KEY_SEQ`.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$odbc` expects an `Odbc\Connection` instance now; previously, a `resource` was expected. |
| 8.4.0 | This function returns an `Odbc\Result` instance now; previously, a `resource` was returned. |

## Examples

**List primary Keys of a Column**

```php


<?php
$conn = odbc_connect($dsn, $user, $pass);
$primarykeys = odbc_primarykeys($conn, 'TutorialDB', 'dbo', 'TEST');
while (($row = odbc_fetch_array($primarykeys))) {
    print_r($row);
    break; // further rows omitted for brevity
}
?>

   
```

The above example will output something similar to:

```text


Array
(
    [TABLE_CAT] => TutorialDB
    [TABLE_SCHEM] => dbo
    [TABLE_NAME] => TEST
    [COLUMN_NAME] => id
    [KEY_SEQ] => 1
    [PK_NAME] => PK__TEST__3213E83FE141F843
)

   
```

## See Also

`odbc_tables()` `odbc_foreignkeys()`
