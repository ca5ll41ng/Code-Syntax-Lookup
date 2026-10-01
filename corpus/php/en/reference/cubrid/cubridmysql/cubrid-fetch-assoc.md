---
id: "en-php-function-function-cubrid-fetch-assoc"
language: "php"
lang: "en"
category: "function"
name: "cubrid_fetch_assoc"
title: "Return the associative array that corresponds to the fetched row"
signature: "array cubrid_fetch_assoc(resource $result, [int $type = ...])"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-fetch-assoc.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the associative array that corresponds to the fetched row

## Description

```php
array cubrid_fetch_assoc(resource $result, [int $type = ...])
```

This function returns the associative array, that corresponds to the fetched row, and then moves the internal data pointer ahead, or returns FALSE when the end is reached.

## Parameters

- **`$result`** — `$result` comes from a call to `cubrid_execute()`
- **`$type`** — Type can only be CUBRID_LOB, this parameter will be used only when you need to operate the lob object.

## Return Values

Associative array, when process is successful.

`false`, when there are no more rows; NULL, when process is unsuccessful.

## Examples

**`cubrid_fetch_assoc()` example**

```php


<?php
$conn = cubrid_connect("localhost", 33000, "demodb");
$req = cubrid_execute($conn, "SELECT name,area,seats,address FROM stadium WHERE nation_code='GRE' AND seats > 10000");

printf("%-40s %-10s %-6s %-20s\n", "name", "area", "seats", "address");
while ($row = cubrid_fetch_assoc($req)) {
    printf("%-40s %-10s %-6s %-20s\n",
        $row["name"], $row["area"], $row["seats"], $row["address"]);
}

// if you want to operate LOB object, you can use cubrid_fetch_assoc($req, CUBRID_LOB)

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

 `cubrid_execute()` `cubrid_fetch()` `cubrid_fetch_row()` `cubrid_fetch_array()` `cubrid_fetch_object()`
