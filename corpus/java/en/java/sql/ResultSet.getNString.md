---
id: "java-en-function-resultset-getnstring"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.getNString"
signature: "String getNString(int columnIndex) throws SQLException"
title: "ResultSet.getNString"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.getNString

```java
String getNString(int columnIndex) throws SQLException
```

Retrieves the value of the designated column in the current row
 of this `ResultSet` object as
 a `String` in the Java programming language.
 It is intended for use when
 accessing  `NCHAR`,`NVARCHAR`
 and `LONGNVARCHAR` columns.

**参数**

- **columnIndex** — the first column is 1, the second is 2, ...

**返回**

- the column value; if the value is SQL `NULL`, the value returned is `null`

**异常**

- **SQLException** — if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.6*
