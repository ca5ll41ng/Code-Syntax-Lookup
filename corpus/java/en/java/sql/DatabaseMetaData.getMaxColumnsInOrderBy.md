---
id: "java-en-function-databasemetadata-getmaxcolumnsinorderby"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getMaxColumnsInOrderBy"
signature: "int getMaxColumnsInOrderBy() throws SQLException"
title: "DatabaseMetaData.getMaxColumnsInOrderBy"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getMaxColumnsInOrderBy

```java
int getMaxColumnsInOrderBy() throws SQLException
```

Retrieves the maximum number of columns this database allows in an
 `ORDER BY` clause.

**返回**

- the maximum number of columns allowed; a result of zero means that there is no limit or the limit is not known

**异常**

- **SQLException** — if a database access error occurs
