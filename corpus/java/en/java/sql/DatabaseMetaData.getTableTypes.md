---
id: "java-en-function-databasemetadata-gettabletypes"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getTableTypes"
signature: "ResultSet getTableTypes() throws SQLException"
title: "DatabaseMetaData.getTableTypes"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getTableTypes

```java
ResultSet getTableTypes() throws SQLException
```

Retrieves the table types available in this database.  The results
 are ordered by table type.

 

The table type is:
  
  
- **TABLE_TYPE** String `=>` table type.  Typical types are "TABLE",
                  "VIEW", "SYSTEM TABLE", "GLOBAL TEMPORARY",
                  "LOCAL TEMPORARY", "ALIAS", "SYNONYM".

**返回**

- a `ResultSet` object in which each row has a single `String` column that is a table type

**异常**

- **SQLException** — if a database access error occurs
