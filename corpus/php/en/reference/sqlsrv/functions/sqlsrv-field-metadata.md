---
id: "en-php-function-function-sqlsrv-field-metadata"
language: "php"
lang: "en"
category: "function"
name: "sqlsrv_field_metadata"
title: "Retrieves metadata for the fields of a statement prepared by `sqlsrv_prepare()` or `sqlsrv_query()`"
signature: "mixed sqlsrv_field_metadata(resource $stmt)"
module: "sqlsrv"
source_url: "https://www.php.net/manual/en/function.sqlsrv-field-metadata.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieves metadata for the fields of a statement prepared by `sqlsrv_prepare()` or `sqlsrv_query()`

## Description

```php
mixed sqlsrv_field_metadata(resource $stmt)
```

Retrieves metadata for the fields of a statement prepared by `sqlsrv_prepare()` or `sqlsrv_query()`. `sqlsrv_field_metadata()` can be called on a statement before or after statement execution.

## Parameters

- **`$stmt`** — The statement resource for which metadata is returned.

## Return Values

Returns an array of arrays on success. Otherwise, `false` is returned. Each returned array is described by the following table:

| Key | Description |
| --- | --- |
| Name | The name of the field. |
| Type | The numeric value for the SQL type. |
| Size | The number of characters for fields of character type, the number of bytes for fields of binary type, or `null` for other types. |
| Precision | The precision for types of variable precision, `null` for other types. |
| Scale | The scale for types of variable scale, `null` for other types. |
| Nullable | An enumeration indicating whether the column is nullable, not nullable, or if it is not known. |

For more information, see [sqlsrv_field_metadata]() in the Microsoft SQLSRV documentation.

## Examples

**`sqlsrv_field_metadata()` example**

```php


<?php
$serverName = "serverName\sqlexpress";
$connectionInfo = array( "Database"=>"AdventureWorks", "UID"=>"username", "PWD"=>"password");
$conn = sqlsrv_connect( $serverName, $connectionInfo);
if( $conn === false ) {
   die( print_r( sqlsrv_errors(), true));
}

$sql = "SELECT * FROM Table_1";
$stmt = sqlsrv_prepare( $conn, $sql );

foreach( sqlsrv_field_metadata( $stmt ) as $fieldMetadata ) {
    foreach( $fieldMetadata as $name => $value) {
       echo "$name: $value<br />";
    }
      echo "<br />";
}
?>

   
```

## See Also

 `sqlsrv_client_info()`
