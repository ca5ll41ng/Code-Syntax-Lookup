---
id: "java-en-function-databasemetadata-getcatalogs"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getCatalogs"
signature: "ResultSet getCatalogs() throws SQLException"
title: "DatabaseMetaData.getCatalogs"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getCatalogs

```java
ResultSet getCatalogs() throws SQLException
```

Retrieves the catalog names available in this database.  The results
 are ordered by catalog name.

 

The catalog column is:
  
  
- **TABLE_CAT** String `=>` catalog name

**返回**

- a `ResultSet` object in which each row has a single `String` column that is a catalog name

**异常**

- **SQLException** — if a database access error occurs
