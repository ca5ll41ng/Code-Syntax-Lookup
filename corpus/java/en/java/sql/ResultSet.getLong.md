---
id: "java-en-function-resultset-getlong"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.getLong"
signature: "long getLong(int columnIndex) throws SQLException"
title: "ResultSet.getLong"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.getLong

```java
long getLong(int columnIndex) throws SQLException
```

Retrieves the value of the designated column in the current row
 of this `ResultSet` object as
 a `long` in the Java programming language.

**参数**

- **columnIndex** — the first column is 1, the second is 2, ...

**返回**

- the column value; if the value is SQL `NULL`, the value returned is `0`

**异常**

- **SQLException** — if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
