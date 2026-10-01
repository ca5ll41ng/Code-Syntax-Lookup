---
id: "java-en-function-resultset-geturl"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.getURL"
signature: "java.net.URL getURL(int columnIndex) throws SQLException"
title: "ResultSet.getURL"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.getURL

```java
java.net.URL getURL(int columnIndex) throws SQLException
```

Retrieves the value of the designated column in the current row
 of this `ResultSet` object as a `java.net.URL`
 object in the Java programming language.

**参数**

- **columnIndex** — the index of the column 1 is the first, 2 is the second,...

**返回**

- the column value as a `java.net.URL` object; if the value is SQL `NULL`, the value returned is `null` in the Java programming language

**异常**

- **SQLException** — if the columnIndex is not valid; if a database access error occurs; this method is called on a closed result set or if a URL is malformed
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.4*
