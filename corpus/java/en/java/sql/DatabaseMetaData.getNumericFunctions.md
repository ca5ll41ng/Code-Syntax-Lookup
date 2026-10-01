---
id: "java-en-function-databasemetadata-getnumericfunctions"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getNumericFunctions"
signature: "String getNumericFunctions() throws SQLException"
title: "DatabaseMetaData.getNumericFunctions"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getNumericFunctions

```java
String getNumericFunctions() throws SQLException
```

Retrieves a comma-separated list of math functions available with
 this database.  These are the Open /Open CLI math function names used in
 the JDBC function escape clause.

**返回**

- the list of math functions supported by this database

**异常**

- **SQLException** — if a database access error occurs
