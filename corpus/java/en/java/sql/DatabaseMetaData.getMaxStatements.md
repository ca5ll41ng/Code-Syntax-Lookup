---
id: "java-en-function-databasemetadata-getmaxstatements"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getMaxStatements"
signature: "int getMaxStatements() throws SQLException"
title: "DatabaseMetaData.getMaxStatements"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getMaxStatements

```java
int getMaxStatements() throws SQLException
```

Retrieves the maximum number of active statements to this database
 that can be open at the same time.

**返回**

- the maximum number of statements that can be open at one time; a result of zero means that there is no limit or the limit is not known

**异常**

- **SQLException** — if a database access error occurs
