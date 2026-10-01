---
id: "en-php-function-function-db2-tables"
language: "php"
lang: "en"
category: "function"
name: "db2_tables"
title: "Returns a result set listing the tables and associated metadata in a database"
signature: "resource db2_tables(resource $connection, string|null $qualifier = null, string|null $schema = null, string|null $table_name = null, string|null $table_type = null)"
module: "ibm_db2"
source_url: "https://www.php.net/manual/en/function.db2-tables.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a result set listing the tables and associated metadata in a database

## Description

```php
resource db2_tables(resource $connection, string|null $qualifier = null, string|null $schema = null, string|null $table_name = null, string|null $table_type = null)
```

Returns a result set listing the tables and associated metadata in a database.

## Parameters

- **`$connection`** — A valid connection to an IBM DB2, Cloudscape, or Apache Derby database.
- **`$qualifier`** — A qualifier for DB2 databases running on OS/390 or z/OS servers. For other databases, pass `null` or an empty string.
- **`$schema`** — The schema which contains the tables. This parameter accepts a search pattern containing `_` and `%` as wildcards.
- **`$table_name`** — The name of the table. This parameter accepts a search pattern containing `_` and `%` as wildcards.
- **`$table_type`** — A list of comma-delimited table type identifiers. To match all table types, pass `null` or an empty string. Valid table type identifiers include: ALIAS, HIERARCHY TABLE, INOPERATIVE VIEW, NICKNAME, MATERIALIZED QUERY TABLE, SYSTEM TABLE, TABLE, TYPED TABLE, TYPED VIEW, and VIEW.

## Return Values

Returns a statement resource with a result set containing rows describing the tables that match the specified parameters. The rows are composed of the following columns:

| Column name | Description |
| --- | --- |
| TABLE_CAT | The catalog that contains the table. The value is `null` if this table does not have catalogs. |
| TABLE_SCHEM | Name of the schema that contains the table. |
| TABLE_NAME | Name of the table. |
| TABLE_TYPE | Table type identifier for the table. |
| REMARKS | Description of the table. |

## See Also

 `db2_column_privileges()` `db2_columns()` `db2_foreign_keys()` `db2_primary_keys()` `db2_procedure_columns()` `db2_procedures()` `db2_special_columns()` `db2_statistics()` `db2_table_privileges()`
