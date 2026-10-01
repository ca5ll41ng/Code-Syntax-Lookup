---
id: "en-php-function-function-db2-primary-keys"
language: "php"
lang: "en"
category: "function"
name: "db2_primary_keys"
title: "Returns a result set listing primary keys for a table"
signature: "resource db2_primary_keys(resource $connection, string|null $qualifier, string|null $schema, string $table_name)"
module: "ibm_db2"
source_url: "https://www.php.net/manual/en/function.db2-primary-keys.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a result set listing primary keys for a table

## Description

```php
resource db2_primary_keys(resource $connection, string|null $qualifier, string|null $schema, string $table_name)
```

Returns a result set listing the primary keys for a table.

## Parameters

- **`$connection`** — A valid connection to an IBM DB2, Cloudscape, or Apache Derby database.
- **`$qualifier`** — A qualifier for DB2 databases running on OS/390 or z/OS servers. For other databases, pass `null` or an empty string.
- **`$schema`** — The schema which contains the tables. If `$schema` is `null`, `db2_primary_keys()` matches the schema for the current connection.
- **`$table_name`** — The name of the table.

## Return Values

Returns a statement resource with a result set containing rows describing the primary keys for the specified table. The result set is composed of the following columns:

| Column name | Description |
| --- | --- |
| TABLE_CAT | Name of the catalog for the table containing the primary key. The value is NULL if this table does not have catalogs. |
| TABLE_SCHEM | Name of the schema for the table containing the primary key. |
| TABLE_NAME | Name of the table containing the primary key. |
| COLUMN_NAME | Name of the column containing the primary key. |
| KEY_SEQ | 1-indexed position of the column in the key. |
| PK_NAME | The name of the primary key. |

## See Also

 `db2_column_privileges()` `db2_columns()` `db2_foreign_keys()` `db2_procedure_columns()` `db2_procedures()` `db2_special_columns()` `db2_statistics()` `db2_table_privileges()` `db2_tables()`
