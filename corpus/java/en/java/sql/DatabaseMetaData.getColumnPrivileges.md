---
id: "java-en-function-databasemetadata-getcolumnprivileges"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getColumnPrivileges"
signature: "ResultSet getColumnPrivileges(String catalog, String schema, String table, String columnNamePattern) throws SQLException"
title: "DatabaseMetaData.getColumnPrivileges"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getColumnPrivileges

```java
ResultSet getColumnPrivileges(String catalog, String schema, String table, String columnNamePattern) throws SQLException
```

Retrieves a description of the access rights for a table's columns.

 

Only privileges matching the column name criteria are
 returned.  They are ordered by COLUMN_NAME and PRIVILEGE.

 

Each privilege description has the following columns:
  
  
- **TABLE_CAT** String `=>` table catalog (may be `null`)
  
- **TABLE_SCHEM** String `=>` table schema (may be `null`)
  
- **TABLE_NAME** String `=>` table name
  
- **COLUMN_NAME** String `=>` column name
  
- **GRANTOR** String `=>` grantor of access (may be `null`)
  
- **GRANTEE** String `=>` grantee of access
  
- **PRIVILEGE** String `=>` name of access (SELECT,
      INSERT, UPDATE, REFERENCES, ...)
  
- **IS_GRANTABLE** String `=>` "YES" if grantee is permitted
      to grant to others; "NO" if not; `null` if unknown

**参数**

- **catalog** — a catalog name; must match the catalog name as it is stored in the database; "" retrieves those without a catalog; `null` means that the catalog name should not be used to narrow the search
- **schema** — a schema name; must match the schema name as it is stored in the database; "" retrieves those without a schema; `null` means that the schema name should not be used to narrow the search
- **table** — a table name; must match the table name as it is stored in the database
- **columnNamePattern** — a column name pattern; must match the column name as it is stored in the database

**返回**

- `ResultSet` - each row is a column privilege description

**异常**

- **SQLException** — if a database access error occurs

**参见**

- #getSearchStringEscape
