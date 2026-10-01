---
id: "java-en-function-databasemetadata-getsupertables"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getSuperTables"
signature: "ResultSet getSuperTables(String catalog, String schemaPattern, String tableNamePattern) throws SQLException"
title: "DatabaseMetaData.getSuperTables"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getSuperTables

```java
ResultSet getSuperTables(String catalog, String schemaPattern, String tableNamePattern) throws SQLException
```

Retrieves a description of the table hierarchies defined in a particular
 schema in this database.

 

Only supertable information for tables matching the catalog, schema
 and table name are returned. The table name parameter may be a fully-
 qualified name, in which case, the catalog and schemaPattern parameters
 are ignored. If a table does not have a super table, it is not listed here.
 Supertables have to be defined in the same catalog and schema as the
 sub tables. Therefore, the type description does not need to include
 this information for the supertable.

 

Each type description has the following columns:
  
  
- **TABLE_CAT** String `=>` the type's catalog (may be `null`)
  
- **TABLE_SCHEM** String `=>` type's schema (may be `null`)
  
- **TABLE_NAME** String `=>` type name
  
- **SUPERTABLE_NAME** String `=>` the direct super type's name
  

 

**Note:** If the driver does not support type hierarchies, an
 empty result set is returned.

**参数**

- **catalog** — a catalog name; "" retrieves those without a catalog; `null` means drop catalog name from the selection criteria
- **schemaPattern** — a schema name pattern; "" retrieves those without a schema
- **tableNamePattern** — a table name pattern; may be a fully-qualified name

**返回**

- a `ResultSet` object in which each row is a type description

**异常**

- **SQLException** — if a database access error occurs

**参见**

- #getSearchStringEscape

> *Since 1.4*
