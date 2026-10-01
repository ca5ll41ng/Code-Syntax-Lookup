---
id: "en-php-function-function-db2-column-privileges"
language: "php"
lang: "en"
category: "function"
name: "db2_column_privileges"
title: "Returns a result set listing the columns and associated privileges for a table"
signature: "resource db2_column_privileges(resource $connection, string|null $qualifier = null, string|null $schema = null, string|null $table_name = null, string|null $column_name = null)"
module: "ibm_db2"
source_url: "https://www.php.net/manual/en/function.db2-column-privileges.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a result set listing the columns and associated privileges for a table

## Description

```php
resource db2_column_privileges(resource $connection, string|null $qualifier = null, string|null $schema = null, string|null $table_name = null, string|null $column_name = null)
```

Returns a result set listing the columns and associated privileges for a table.

## Parameters

- **`$connection`** — A valid connection to an IBM DB2, Cloudscape, or Apache Derby database.
- **`$qualifier`** — A qualifier for DB2 databases running on OS/390 or z/OS servers. For other databases, pass `null` or an empty string.
- **`$schema`** — The schema which contains the tables. To match all schemas, pass `null` or an empty string.
- **`$table_name`** — The name of the table or view. To match all tables in the database, pass `null` or an empty string.
- **`$column_name`** — The name of the column. To match all columns in the table, pass `null` or an empty string.

## Return Values

Returns a statement resource with a result set containing rows describing the column privileges for columns matching the specified parameters. The rows are composed of the following columns:

| Column name | Description |
| --- | --- |
| TABLE_CAT | Name of the catalog. The value is NULL if this table does not have catalogs. |
| TABLE_SCHEM | Name of the schema. |
| TABLE_NAME | Name of the table or view. |
| COLUMN_NAME | Name of the column. |
| GRANTOR | Authorization ID of the user who granted the privilege. |
| GRANTEE | Authorization ID of the user to whom the privilege was granted. |
| PRIVILEGE | The privilege for the column. |
| IS_GRANTABLE | Whether the GRANTEE is permitted to grant this privilege to other users. |

## See Also

 `db2_columns()` `db2_foreign_keys()` `db2_primary_keys()` `db2_procedure_columns()` `db2_procedures()` `db2_special_columns()` `db2_statistics()` `db2_table_privileges()` `db2_tables()`
