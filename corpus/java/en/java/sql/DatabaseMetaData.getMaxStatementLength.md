---
id: "java-en-function-databasemetadata-getmaxstatementlength"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getMaxStatementLength"
signature: "int getMaxStatementLength() throws SQLException"
title: "DatabaseMetaData.getMaxStatementLength"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getMaxStatementLength

```java
int getMaxStatementLength() throws SQLException
```

Retrieves the maximum number of characters this database allows in
 an SQL statement.

**返回**

- the maximum number of characters allowed for an SQL statement; a result of zero means that there is no limit or the limit is not known

**异常**

- **SQLException** — if a database access error occurs
