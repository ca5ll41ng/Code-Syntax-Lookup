---
id: "en-php-function-function-cubrid-affected-rows"
language: "php"
lang: "en"
category: "function"
name: "cubrid_affected_rows"
title: "Return the number of rows affected by the last SQL statement"
signature: "int cubrid_affected_rows([resource $conn_identifier = ...])"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-affected-rows.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the number of rows affected by the last SQL statement

## Description

```php
int cubrid_affected_rows([resource $conn_identifier = ...])
```

```php
int cubrid_affected_rows([resource $req_identifier = ...])
```

The `cubrid_affected_rows()` function is used to get the number of rows affected by the SQL statement (INSERT, DELETE, UPDATE).

## Parameters

- **`$conn_identifier`** — The CUBRID connection. If the connection identifier is not specified, the last link opened by `cubrid_connect()` is assumed.
- **`$req_identifier`** — Request Identifier, could be returned from either `cubrid_prepare()` or `cubrid_execute()`. If the request identifier is not specified, the last identifier requested by `cubrid_prepare()` or `cubrid_execute()` is assumed.

## Return Values

Number of rows affected by the SQL statement, when process is successful.

-1, when SQL statement is not INSERT, DELETE or UPDATE.

`false`, when the request identifier is not specified, and there is no last request.

## Examples

**`cubrid_affected_rows()` example**

```php


<?php
$conn = cubrid_connect('localhost', 33000, 'demodb', 'dba', '');
cubrid_execute($conn, "DROP TABLE IF EXISTS cubrid_test");
cubrid_execute($conn, "CREATE TABLE cubrid_test (d varchar)");
$sql_stmt = "INSERT INTO cubrid_test(d) VALUES('php-test')";
$req = cubrid_prepare($conn, $sql_stmt);

for ($i = 0; $i < 10; $i++) {
    cubrid_execute($req);
}
cubrid_commit($conn);

$req = cubrid_execute($conn, "DELETE FROM cubrid_test WHERE d='php-test'", CUBRID_ASYNC);
var_dump(cubrid_affected_rows());
var_dump(cubrid_affected_rows($conn));
var_dump(cubrid_affected_rows($req));

cubrid_disconnect($conn);

print "done!";
?>

   
```

The above example will output:

```text


int(10)
int(10)
int(10)
done!

   
```

## See Also

 `cubrid_execute()`
