---
id: "java-en-function-resultset-getnclob"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.getNClob"
signature: "NClob getNClob(int columnIndex) throws SQLException"
title: "ResultSet.getNClob"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.getNClob

```java
NClob getNClob(int columnIndex) throws SQLException
```

Retrieves the value of the designated column in the current row
 of this `ResultSet` object as a `NClob` object
 in the Java programming language.

**参数**

- **columnIndex** — the first column is 1, the second is 2, ...

**返回**

- a `NClob` object representing the SQL `NCLOB` value in the specified column

**异常**

- **SQLException** — if the columnIndex is not valid; if the driver does not support national character sets;  if the driver can detect that a data conversion error could occur; this method is called on a closed result set or if a database access error occurs
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.6*
