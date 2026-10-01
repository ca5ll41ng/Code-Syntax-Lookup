---
id: "java-en-function-databasemetadata-getstringfunctions"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getStringFunctions"
signature: "String getStringFunctions() throws SQLException"
title: "DatabaseMetaData.getStringFunctions"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getStringFunctions

```java
String getStringFunctions() throws SQLException
```

Retrieves a comma-separated list of string functions available with
 this database.  These are the  Open Group CLI string function names used
 in the JDBC function escape clause.

**返回**

- the list of string functions supported by this database

**异常**

- **SQLException** — if a database access error occurs
