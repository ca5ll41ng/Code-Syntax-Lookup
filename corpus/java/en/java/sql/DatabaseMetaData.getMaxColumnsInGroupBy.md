---
id: "java-en-function-databasemetadata-getmaxcolumnsingroupby"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getMaxColumnsInGroupBy"
signature: "int getMaxColumnsInGroupBy() throws SQLException"
title: "DatabaseMetaData.getMaxColumnsInGroupBy"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getMaxColumnsInGroupBy

```java
int getMaxColumnsInGroupBy() throws SQLException
```

Retrieves the maximum number of columns this database allows in a
 `GROUP BY` clause.

**返回**

- the maximum number of columns allowed; a result of zero means that there is no limit or the limit is not known

**异常**

- **SQLException** — if a database access error occurs
