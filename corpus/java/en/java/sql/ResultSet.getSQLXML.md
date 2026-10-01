---
id: "java-en-function-resultset-getsqlxml"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.getSQLXML"
signature: "SQLXML getSQLXML(int columnIndex) throws SQLException"
title: "ResultSet.getSQLXML"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.getSQLXML

```java
SQLXML getSQLXML(int columnIndex) throws SQLException
```

Retrieves the value of the designated column in  the current row of
  this `ResultSet` as a
 `java.sql.SQLXML` object in the Java programming language.

**参数**

- **columnIndex** — the first column is 1, the second is 2, ...

**返回**

- a `SQLXML` object that maps an `SQL XML` value

**异常**

- **SQLException** — if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.6*
