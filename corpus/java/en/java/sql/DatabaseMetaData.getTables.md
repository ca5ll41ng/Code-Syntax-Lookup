---
id: "java-en-function-databasemetadata-gettables"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getTables"
signature: "ResultSet getTables(String catalog, String schemaPattern, String tableNamePattern, String types[]) throws SQLException"
title: "DatabaseMetaData.getTables"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getTables

```java
ResultSet getTables(String catalog, String schemaPattern, String tableNamePattern, String types[]) throws SQLException
```

Retrieves a description of the tables available in the given catalog.
 Only table descriptions matching the catalog, schema, table
 name and type criteria are returned.  They are ordered by
 `TABLE_TYPE`, `TABLE_CAT`,
 `TABLE_SCHEM` and `TABLE_NAME`.
 

 Each table description has the following columns:
  
  
- **TABLE_CAT** String `=>` table catalog (may be `null`)
  
- **TABLE_SCHEM** String `=>` table schema (may be `null`)
  
- **TABLE_NAME** String `=>` table name
  
- **TABLE_TYPE** String `=>` table type.  Typical types are "TABLE",
                  "VIEW", "SYSTEM TABLE", "GLOBAL TEMPORARY",
                  "LOCAL TEMPORARY", "ALIAS", "SYNONYM".
  
- **REMARKS** String `=>` explanatory comment on the table (may be `null`)
  
- **TYPE_CAT** String `=>` the types catalog (may be `null`)
  
- **TYPE_SCHEM** String `=>` the types schema (may be `null`)
  
- **TYPE_NAME** String `=>` type name (may be `null`)
  
- **SELF_REFERENCING_COL_NAME** String `=>` name of the designated
                  "identifier" column of a typed table (may be `null`)
  
- **REF_GENERATION** String `=>` specifies how values in
                  SELF_REFERENCING_COL_NAME are created. Values are
                  "SYSTEM", "USER", "DERIVED". (may be `null`)
  

 

**Note:** Some databases may not return information for
 all tables.

**参数**

- **catalog** — a catalog name; must match the catalog name as it is stored in the database; "" retrieves those without a catalog; `null` means that the catalog name should not be used to narrow the search
- **schemaPattern** — a schema name pattern; must match the schema name as it is stored in the database; "" retrieves those without a schema; `null` means that the schema name should not be used to narrow the search
- **tableNamePattern** — a table name pattern; must match the table name as it is stored in the database
- **types** — a list of table types, which must be from the list of table types returned from `getTableTypes`, to include; `null` returns all types

**返回**

- `ResultSet` - each row is a table description

**异常**

- **SQLException** — if a database access error occurs

**参见**

- #getSearchStringEscape
