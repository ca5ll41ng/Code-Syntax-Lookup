---
id: "java-en-function-databasemetadata-getschemas"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getSchemas"
signature: "ResultSet getSchemas() throws SQLException"
title: "DatabaseMetaData.getSchemas"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getSchemas

```java
ResultSet getSchemas() throws SQLException
```

Retrieves the schema names available in this database.  The results
 are ordered by `TABLE_CATALOG` and
 `TABLE_SCHEM`.

 

The schema columns are:
  
  
- **TABLE_SCHEM** String `=>` schema name
  
- **TABLE_CATALOG** String `=>` catalog name (may be `null`)

**返回**

- a `ResultSet` object in which each row is a schema description

**异常**

- **SQLException** — if a database access error occurs
