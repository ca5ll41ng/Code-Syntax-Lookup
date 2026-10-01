---
id: "java-en-function-resultset-getncharacterstream"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.getNCharacterStream"
signature: "java.io.Reader getNCharacterStream(int columnIndex) throws SQLException"
title: "ResultSet.getNCharacterStream"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.getNCharacterStream

```java
java.io.Reader getNCharacterStream(int columnIndex) throws SQLException
```

Retrieves the value of the designated column in the current row
 of this `ResultSet` object as a
 `java.io.Reader` object.
 It is intended for use when
 accessing  `NCHAR`,`NVARCHAR`
 and `LONGNVARCHAR` columns.

**参数**

- **columnIndex** — the first column is 1, the second is 2, ...

**返回**

- a `java.io.Reader` object that contains the column value; if the value is SQL `NULL`, the value returned is `null` in the Java programming language.

**异常**

- **SQLException** — if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.6*
