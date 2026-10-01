---
id: "en-php-function-function-cubrid-column-names"
language: "php"
lang: "en"
category: "function"
name: "cubrid_column_names"
title: "Get the column names in result"
signature: "array cubrid_column_names(resource $req_identifier)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-column-names.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the column names in result

## Description

```php
array cubrid_column_names(resource $req_identifier)
```

The `cubrid_column_names()` function is used to get the column names of the query result by using `$req_identifier`.

## Parameters

- **`$req_identifier`** — Request identifier.

## Return Values

Array of string values containing the column names, when process is successful, or `false` on failure.

## Examples

**`cubrid_column_names()` example**

```php


<?php
$conn = cubrid_connect("localhost", 33000, "demodb", "dba");
$result = cubrid_execute($conn, "SELECT * FROM game WHERE host_year=2004 AND nation_code='AUS' AND medal='G'");

$column_names = cubrid_column_names($result);
$column_types = cubrid_column_types($result);

printf("%-30s %-30s %-15s\n", "Column Names", "Column Types", "Column Maxlen");
for($i = 0, $size = count($column_names); $i < $size; $i++) {
    $column_len = cubrid_field_len($result, $i);
    printf("%-30s %-30s %-15s\n", $column_names[$i], $column_types[$i], $column_len);
}

cubrid_disconnect($conn);
?>

   
```

The above example will output:

```text


Column Names                   Column Types                   Column Maxlen
host_year                      integer                        11
event_code                     integer                        11
athlete_code                   integer                        11
stadium_code                   integer                        11
nation_code                    char                           3
medal                          char                           1
game_date                      date                           10

   
```

## See Also

 `cubrid_prepare()` `cubrid_execute()` `cubrid_column_types()`
