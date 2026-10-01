---
id: "en-php-function-function-db2-table-privileges"
language: "php"
lang: "en"
category: "function"
name: "db2_table_privileges"
title: "Returns a result set listing the tables and associated privileges in a database"
signature: "resource db2_table_privileges(resource $connection, string|null $qualifier = null, string|null $schema = null, string|null $table_name = null)"
module: "ibm_db2"
source_url: "https://www.php.net/manual/en/function.db2-table-privileges.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a result set listing the tables and associated privileges in a database

## Description

```php
resource db2_table_privileges(resource $connection, string|null $qualifier = null, string|null $schema = null, string|null $table_name = null)
```

Returns a result set listing the tables and associated privileges in a database.

## Parameters

- **`$connection`** — A valid connection to an IBM DB2, Cloudscape, or Apache Derby database.
- **`$qualifier`** — A qualifier for DB2 databases running on OS/390 or z/OS servers. For other databases, pass `null` or an empty string.
- **`$schema`** — The schema which contains the tables. This parameter accepts a search pattern containing `_` and `%` as wildcards.
- **`$table_name`** — The name of the table. This parameter accepts a search pattern containing `_` and `%` as wildcards.

## Return Values

Returns a statement resource with a result set containing rows describing the privileges for the tables that match the specified parameters. The rows are composed of the following columns:

| Column name | Description |
| --- | --- |
| TABLE_CAT | The catalog that contains the table. The value is `null` if this table does not have catalogs. |
| TABLE_SCHEM | Name of the schema that contains the table. |
| TABLE_NAME | Name of the table. |
| GRANTOR | Authorization ID of the user who granted the privilege. |
| GRANTEE | Authorization ID of the user to whom the privilege was granted. |
| PRIVILEGE | The privilege that has been granted. This can be one of ALTER, CONTROL, DELETE, INDEX, INSERT, REFERENCES, SELECT, or UPDATE. |
| IS_GRANTABLE | A string value of "YES" or "NO" indicating whether the grantee can grant the privilege to other users. |

## See Also

 `db2_column_privileges()` `db2_columns()` `db2_foreign_keys()` `db2_primary_keys()` `db2_procedure_columns()` `db2_procedures()` `db2_special_columns()` `db2_statistics()` `db2_tables()`
