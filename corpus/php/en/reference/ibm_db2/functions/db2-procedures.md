---
id: "en-php-function-function-db2-procedures"
language: "php"
lang: "en"
category: "function"
name: "db2_procedures"
title: "Returns a result set listing the stored procedures registered in a database"
signature: "resource db2_procedures(resource $connection, string|null $qualifier, string $schema, string $procedure)"
module: "ibm_db2"
source_url: "https://www.php.net/manual/en/function.db2-procedures.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a result set listing the stored procedures registered in a database

## Description

```php
resource db2_procedures(resource $connection, string|null $qualifier, string $schema, string $procedure)
```

Returns a result set listing the stored procedures registered in a database.

## Parameters

- **`$connection`** — A valid connection to an IBM DB2, Cloudscape, or Apache Derby database.
- **`$qualifier`** — A qualifier for DB2 databases running on OS/390 or z/OS servers. For other databases, pass `null` or an empty string.
- **`$schema`** — The schema which contains the procedures. This parameter accepts a search pattern containing `_` and `%` as wildcards.
- **`$procedure`** — The name of the procedure. This parameter accepts a search pattern containing `_` and `%` as wildcards.

## Return Values

Returns a statement resource with a result set containing rows describing the stored procedures matching the specified parameters. The rows are composed of the following columns:

| Column name | Description |
| --- | --- |
| PROCEDURE_CAT | The catalog that contains the procedure. The value is `null` if this table does not have catalogs. |
| PROCEDURE_SCHEM | Name of the schema that contains the stored procedure. |
| PROCEDURE_NAME | Name of the procedure. |
| NUM_INPUT_PARAMS | Number of input (IN) parameters for the stored procedure. |
| NUM_OUTPUT_PARAMS | Number of output (OUT) parameters for the stored procedure. |
| NUM_RESULT_SETS | Number of result sets returned by the stored procedure. |
| REMARKS | Any comments about the stored procedure. |
| PROCEDURE_TYPE | Always returns `1`, indicating that the stored procedure does not return a return value. |

## See Also

 `db2_column_privileges()` `db2_columns()` `db2_foreign_keys()` `db2_primary_keys()` `db2_procedure_columns()` `db2_special_columns()` `db2_statistics()` `db2_table_privileges()` `db2_tables()`
