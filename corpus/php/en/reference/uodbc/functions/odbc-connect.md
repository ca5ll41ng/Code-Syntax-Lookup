---
id: "en-php-function-function-odbc-connect"
language: "php"
lang: "en"
category: "function"
name: "odbc_connect"
title: "Connect to a datasource"
signature: "Odbc\\Connection|false odbc_connect(string $dsn, string|null $user = null, string|null $password = null, int $cursor_option = SQL_CUR_USE_DRIVER)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-connect.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Connect to a datasource

## Description

```php
Odbc\Connection|false odbc_connect(string $dsn, string|null $user = null, string|null $password = null, int $cursor_option = SQL_CUR_USE_DRIVER)
```

The connection id returned by this functions is needed by other ODBC functions. You can have multiple connections open at once as long as they either use different db or different credentials.

With some ODBC drivers, executing a complex stored procedure may fail with an error similar to: "Cannot open a cursor on a stored procedure that has anything other than a single select statement in it". Using SQL_CUR_USE_ODBC may avoid that error. Also, some drivers don't support the optional row_number parameter in `odbc_fetch_row()`. SQL_CUR_USE_ODBC might help in that case, too.

## Parameters

- **`$dsn`** — The database source name for the connection. Alternatively, a DSN-less connection string can be used.
- **`$user`** — The username. This parameter is ignored if `$dsn` contains `uid`. To connect without specifying a `$user`, use `null`.
- **`$password`** — The password. This parameter is ignored if `$dsn` contains `pwd`. To connect without specifying a `$password`, use `null`.
- **`$cursor_option`** — This sets the type of cursor to be used for this connection. This parameter is not normally needed, but can be useful for working around problems with some ODBC drivers. — The following constants are defined for cursortype: — - SQL_CUR_USE_IF_NEEDED - SQL_CUR_USE_ODBC - SQL_CUR_USE_DRIVER

## Return Values

Returns an ODBC connection, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | This function returns a `Odbc\Connection` instance now; previously, a `resource` was returned. |
| 8.4.0 | `$user` and `$password` are now nullable, they are now also optional and default to `null`. |
| 8.4.0 | Previously, using an empty string for `$password` would not include `pwd` in the generated connection string for `$dsn`. It is now generated to include a `pwd` which has an empty string as its value. To restore the previous behaviour `$password` can now be set to `null`. |
| 8.4.0 | Previously, if `$dsn` contained `uid` or `pwd` both `$user` and `$password` parameters were ignored. Now `$user` is only ignored if `$dsn` contains `uid`, and `$password` is only ignored if `$dsn` contains `pwd`. |

## Examples

**DSN-less connections**

```php


<?php
// Microsoft SQL Server using the SQL Native Client 10.0 ODBC Driver - allows connection to SQL 7, 2000, 2005 and 2008
$connection = odbc_connect("Driver={SQL Server Native Client 10.0};Server=$server;Database=$database;", $user, $password);

// Microsoft Access
$connection = odbc_connect("Driver={Microsoft Access Driver (*.mdb)};Dbq=$mdbFilename", $user, $password);

// Microsoft Excel
$excelFile = realpath('C:/ExcelData.xls');
$excelDir = dirname($excelFile);
$connection = odbc_connect("Driver={Microsoft Excel Driver (*.xls)};DriverId=790;Dbq=$excelFile;DefaultDir=$excelDir" , '', '');
?>

    
```

## See Also

For persistent connections: `odbc_pconnect()`
