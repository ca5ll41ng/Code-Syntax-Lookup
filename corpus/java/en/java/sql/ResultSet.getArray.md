---
id: "java-en-function-resultset-getarray"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.getArray"
signature: "Array getArray(int columnIndex) throws SQLException"
title: "ResultSet.getArray"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.getArray

```java
Array getArray(int columnIndex) throws SQLException
```

Retrieves the value of the designated column in the current row
 of this `ResultSet` object as an `Array` object
 in the Java programming language.

**参数**

- **columnIndex** — the first column is 1, the second is 2, ...

**返回**

- an `Array` object representing the SQL `ARRAY` value in the specified column

**异常**

- **SQLException** — if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
