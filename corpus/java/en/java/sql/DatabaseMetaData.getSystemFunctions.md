---
id: "java-en-function-databasemetadata-getsystemfunctions"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getSystemFunctions"
signature: "String getSystemFunctions() throws SQLException"
title: "DatabaseMetaData.getSystemFunctions"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getSystemFunctions

```java
String getSystemFunctions() throws SQLException
```

Retrieves a comma-separated list of system functions available with
 this database.  These are the  Open Group CLI system function names used
 in the JDBC function escape clause.

**返回**

- a list of system functions supported by this database

**异常**

- **SQLException** — if a database access error occurs
