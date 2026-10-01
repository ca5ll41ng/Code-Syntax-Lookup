---
id: "java-en-function-databasemetadata-getmaxrowsize"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getMaxRowSize"
signature: "int getMaxRowSize() throws SQLException"
title: "DatabaseMetaData.getMaxRowSize"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getMaxRowSize

```java
int getMaxRowSize() throws SQLException
```

Retrieves the maximum number of bytes this database allows in
 a single row.

**返回**

- the maximum number of bytes allowed for a row; a result of zero means that there is no limit or the limit is not known

**异常**

- **SQLException** — if a database access error occurs
