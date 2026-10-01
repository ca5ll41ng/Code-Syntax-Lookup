---
id: "java-en-function-databasemetadata-getmaxcolumnsinselect"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getMaxColumnsInSelect"
signature: "int getMaxColumnsInSelect() throws SQLException"
title: "DatabaseMetaData.getMaxColumnsInSelect"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getMaxColumnsInSelect

```java
int getMaxColumnsInSelect() throws SQLException
```

Retrieves the maximum number of columns this database allows in a
 `SELECT` list.

**返回**

- the maximum number of columns allowed; a result of zero means that there is no limit or the limit is not known

**异常**

- **SQLException** — if a database access error occurs
