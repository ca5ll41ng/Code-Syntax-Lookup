---
id: "java-en-function-databasemetadata-getprimarykeys"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getPrimaryKeys"
signature: "ResultSet getPrimaryKeys(String catalog, String schema, String table) throws SQLException"
title: "DatabaseMetaData.getPrimaryKeys"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getPrimaryKeys

```java
ResultSet getPrimaryKeys(String catalog, String schema, String table) throws SQLException
```

Retrieves a description of the given table's primary key columns.  They
 are ordered by COLUMN_NAME.

 

Each primary key column description has the following columns:
  
  
- **TABLE_CAT** String `=>` table catalog (may be `null`)
  
- **TABLE_SCHEM** String `=>` table schema (may be `null`)
  
- **TABLE_NAME** String `=>` table name
  
- **COLUMN_NAME** String `=>` column name
  
- **KEY_SEQ** short `=>` sequence number within primary key( a value
  of 1 represents the first column of the primary key, a value of 2 would
  represent the second column within the primary key).
  
- **PK_NAME** String `=>` primary key name (may be `null`)

**参数**

- **catalog** — a catalog name; must match the catalog name as it is stored in the database; "" retrieves those without a catalog; `null` means that the catalog name should not be used to narrow the search
- **schema** — a schema name; must match the schema name as it is stored in the database; "" retrieves those without a schema; `null` means that the schema name should not be used to narrow the search
- **table** — a table name; must match the table name as it is stored in the database

**返回**

- `ResultSet` - each row is a primary key column description

**异常**

- **SQLException** — if a database access error occurs
