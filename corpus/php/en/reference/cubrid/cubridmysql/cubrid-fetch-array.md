---
id: "en-php-function-function-cubrid-fetch-array"
language: "php"
lang: "en"
category: "function"
danger: {"type":"source"}
name: "cubrid_fetch_array"
title: "Fetch a result row as an associative array, a numeric array, or both"
signature: "array cubrid_fetch_array(resource $result, int $type = CUBRID_BOTH)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-fetch-array.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fetch a result row as an associative array, a numeric array, or both

## Description

```php
array cubrid_fetch_array(resource $result, int $type = CUBRID_BOTH)
```

The `cubrid_fetch_array()` function is used to get a single row from the query result and returns an array. The cursor automatically moves to the next row after getting the result.

## Parameters

- **`$result`** — `$Result` comes from a call to `cubrid_execute()`
- **`$type`** — Array type of the fetched result CUBRID_NUM, CUBRID_ASSOC, CUBRID_BOTH. If you need to operate the lob object, you can use CUBRID_LOB.

## Return Values

Returns an array of strings that corresponds to the fetched row, when process is successful.

`false`, when there are no more rows; NULL, when process is unsuccessful.

The type of returned array depends on how type is defined. By using CUBRID_BOTH (default), you'll get an array with both associative and number indices, and you can decide which data type to use by setting the `$type` argument. The `$type` variable can be set to one of the following values:

 CUBRID_NUM : Numerical array (0-based) CUBRID_ASSOC : Associative array CUBRID_BOTH : Numerical & Associative array (default) 

## Examples

**`cubrid_fetch_array()` example**

```php


<?php
$conn = cubrid_connect("localhost", 33000, "demodb");
$req = cubrid_execute($conn, "SELECT name,area,seats,address FROM stadium WHERE nation_code='GRE' AND seats > 10000");

printf("%-40s %-10s %-6s %-20s\n", "name", "area", "seats", "address");
while ($row = cubrid_fetch_array($req, CUBRID_NUM)) {
    printf("%-40s %-10s %-6s %-20s\n", $row[0], $row[1], $row[2], $row[3]);
}

// if you want to operate LOB object, you can use cubrid_fetch_array($req, CUBRID_NUM | CUBRID_LOB)

cubrid_close_request($req);

cubrid_disconnect($conn);
?>

   
```

The above example will output:

```text


name                                     area       seats  address
Panathinaiko Stadium                     86300.00   50000  Athens, Greece
Olympic Stadium                          54700.00   13000  Athens, Greece
Olympic Indoor Hall                      34100.00   18800  Athens, Greece
Olympic Hall                             52400.00   21000  Athens, Greece
Olympic Aquatic Centre                   42500.00   11500  Athens, Greece
Markopoulo Olympic Equestrian Centre     64000.00   15000  Markopoulo, Athens, Greece
Faliro Coastal Zone Olympic Complex      34650.00   12171  Faliro, Athens, Greece
Athens Olympic Stadium                   120400.00  71030  Maroussi, Athens, Greece
Ano Liossia                              34000.00   12000  Ano Liosia, Athens, Greece

   
```

## See Also

 `cubrid_execute()` `cubrid_fetch()` `cubrid_fetch_row()` `cubrid_fetch_assoc()` `cubrid_fetch_object()`
