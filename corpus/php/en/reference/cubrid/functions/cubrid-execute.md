---
id: "en-php-function-function-cubrid-execute"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["sql_injection"],"cwe":["CWE-89"],"params":[2]}
name: "cubrid_execute"
title: "Execute a prepared SQL statement"
signature: "resource cubrid_execute(resource $conn_identifier, string $sql, int $option = 0)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-execute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Execute a prepared SQL statement

## Description

```php
resource cubrid_execute(resource $conn_identifier, string $sql, int $option = 0)
```

```php
bool cubrid_execute(resource $request_identifier, int $option = 0)
```

The `cubrid_execute()` function is used to execute the given SQL statement. It executes the query by using `$conn_identifier` and SQL, and then returns the request identifier created. It is used for simple execution of query, where the parameter binding is not needed. In addition, the `cubrid_execute()` function is used to execute the prepared statement by means of `cubrid_prepare()` and `cubrid_bind()`. At this time, you need to specify arguments of `$request_identifier` and `$option`.

The `$option` is used to determine whether to get OID after query execution and whether to execute the query in synchronous or asynchronous mode. `CUBRID_INCLUDE_OID` and `CUBRID_ASYNC` (or `CUBRID_EXEC_QUERY_ALL` if you want to execute multiple SQL statements) can be specified by using a bitwise OR operator. If not specified, neither of them is selected. If the flag `CUBRID_EXEC_QUERY_ALL` is set, a synchronous mode (sync_mode) is used to retrieve query results, and in such cases the following rules are applied:

 The return value is the result of the first query.  If an error occurs in any query, the execution is processed as a failure.   In a query composed of q1 q2 q3, if an error occurs in q2 after q1 succeeds the execution, the result of q1 remains valid. That is, the previous successful query executions are not rolled back when an error occurs.   If a query is executed successfully, the result of the second query can be obtained using `cubrid_next_result()`.  

If the first argument is `$request_identifier` to execute the `cubrid_prepare()` function, you can specify an option, `CUBRID_ASYNC` only.

## Parameters

- **`$conn_identifier`** — Connection identifier.
- **`$sql`** — SQL to be executed.
- **`$option`** — Query execution option `CUBRID_INCLUDE_OID`, `CUBRID_ASYNC`, `CUBRID_EXEC_QUERY_ALL`.
- **`$request_identifier`** — `cubrid_prepare()` identifier.

## Return Values

Request identifier, when process is successful and first param is conn_identifier; `true`, when process is successful and first argument is request_identifier, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | Add new option `CUBRID_EXEC_QUERY_ALL`. |

## Examples

**`cubrid_execute()` example**

```php


<?php
$conn = cubrid_connect("localhost", 33000, "demodb");

$result = cubrid_execute($conn, "SELECT code FROM event WHERE name='100m Butterfly' and gender='M'", CUBRID_ASYNC);
$row = cubrid_fetch_array($result, CUBRID_ASSOC);
$event_code = $row["code"];

cubrid_close_request($result);

$history_req = cubrid_prepare($conn, "SELECT * FROM history WHERE event_code=?");
cubrid_bind($history_req, 1, $event_code, "number");
cubrid_execute($history_req);

printf("%-20s %-9s %-10s %-5s\n", "athlete", "host_year", "score", "unit");
while ($row = cubrid_fetch_array($history_req, CUBRID_ASSOC)) {
    printf("%-20s %-9s %-10s %-5s\n",
        $row["athlete"], $row["host_year"], $row["score"], $row["unit"]);
}

cubrid_close_request($history_req);

cubrid_disconnect($conn);
?>

   
```

The above example will output:

```text


athlete              host_year score      unit
Phelps Michael       2004      51.25      time

   
```

## See Also

 `cubrid_prepare()` `cubrid_bind()` `cubrid_next_result()` `cubrid_close_request()` `cubrid_commit()` `cubrid_rollback()`
