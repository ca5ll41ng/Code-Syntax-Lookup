---
id: "en-php-function-function-db2-foreign-keys"
language: "php"
lang: "en"
category: "function"
name: "db2_foreign_keys"
title: "Returns a result set listing the foreign keys for a table"
signature: "resource db2_foreign_keys(resource $connection, string|null $qualifier, string|null $schema, string $table_name)"
module: "ibm_db2"
source_url: "https://www.php.net/manual/en/function.db2-foreign-keys.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a result set listing the foreign keys for a table

## Description

```php
resource db2_foreign_keys(resource $connection, string|null $qualifier, string|null $schema, string $table_name)
```

Returns a result set listing the foreign keys for a table.

## Parameters

- **`$connection`** — A valid connection to an IBM DB2, Cloudscape, or Apache Derby database.
- **`$qualifier`** — A qualifier for DB2 databases running on OS/390 or z/OS servers. For other databases, pass `null` or an empty string.
- **`$schema`** — The schema which contains the tables. If `$schema` is `null`, `db2_foreign_keys()` matches the schema for the current connection.
- **`$table_name`** — The name of the table.

## Return Values

Returns a statement resource with a result set containing rows describing the foreign keys for the specified table. The result set is composed of the following columns:

| Column name | Description |
| --- | --- |
| PKTABLE_CAT | Name of the catalog for the table containing the primary key. The value is NULL if this table does not have catalogs. |
| PKTABLE_SCHEM | Name of the schema for the table containing the primary key. |
| PKTABLE_NAME | Name of the table containing the primary key. |
| PKCOLUMN_NAME | Name of the column containing the primary key. |
| FKTABLE_CAT | Name of the catalog for the table containing the foreign key. The value is NULL if this table does not have catalogs. |
| FKTABLE_SCHEM | Name of the schema for the table containing the foreign key. |
| FKTABLE_NAME | Name of the table containing the foreign key. |
| FKCOLUMN_NAME | Name of the column containing the foreign key. |
| KEY_SEQ | 1-indexed position of the column in the key. |
| UPDATE_RULE | Integer value representing the action applied to the foreign key when the SQL operation is UPDATE. |
| DELETE_RULE | Integer value representing the action applied to the foreign key when the SQL operation is DELETE. |
| FK_NAME | The name of the foreign key. |
| PK_NAME | The name of the primary key. |
| DEFERRABILITY | An integer value representing whether the foreign key deferrability is SQL_INITIALLY_DEFERRED, SQL_INITIALLY_IMMEDIATE, or SQL_NOT_DEFERRABLE. |

## See Also

 `db2_column_privileges()` `db2_columns()` `db2_primary_keys()` `db2_procedure_columns()` `db2_procedures()` `db2_special_columns()` `db2_statistics()` `db2_table_privileges()` `db2_tables()`
