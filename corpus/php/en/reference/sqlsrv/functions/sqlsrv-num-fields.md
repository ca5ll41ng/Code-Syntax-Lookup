---
id: "en-php-function-function-sqlsrv-num-fields"
language: "php"
lang: "en"
category: "function"
name: "sqlsrv_num_fields"
title: "Retrieves the number of fields (columns) on a statement"
signature: "mixed sqlsrv_num_fields(resource $stmt)"
module: "sqlsrv"
source_url: "https://www.php.net/manual/en/function.sqlsrv-num-fields.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieves the number of fields (columns) on a statement

## Description

```php
mixed sqlsrv_num_fields(resource $stmt)
```

Retrieves the number of fields (columns) on a statement.

## Parameters

- **`$stmt`** — The statement for which the number of fields is returned. `sqlsrv_num_fields()` can be called on a statement before or after statement execution.

## Return Values

Returns the number of fields on success. Returns `false` otherwise.

## Examples

**`sqlsrv_num_fields()` example**

```php


<?php
$serverName = "serverName\sqlexpress";
$connectionInfo = array( "Database"=>"dbName", "UID"=>"username", "PWD"=>"password");
$conn = sqlsrv_connect( $serverName, $connectionInfo);
if( $conn === false ) {
   die( print_r( sqlsrv_errors(), true));
}

$sql = "SELECT * FROM Table_1";
$stmt = sqlsrv_query($conn, $sql);
if( $stmt === false) {
   die( print_r( sqlsrv_errors(), true));
}

$numFields = sqlsrv_num_fields( $stmt );

while( sqlsrv_fetch( $stmt )) {
   // Iterate through the fields of each row.
   for($i = 0; $i < $numFields; $i++) {
      echo sqlsrv_get_field($stmt, $i)." ";
   }
   echo "<br />";
}
?>

   
```

## See Also

 `sqlsrv_field_metadata()` `sqlsrv_fetch()` `sqlsrv_get_field()`
