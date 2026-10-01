---
id: "java-en-function-resultset-getbigdecimal"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.getBigDecimal"
signature: "BigDecimal getBigDecimal(int columnIndex, int scale) throws SQLException"
title: "ResultSet.getBigDecimal"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.getBigDecimal

```java
BigDecimal getBigDecimal(int columnIndex, int scale) throws SQLException
```

Retrieves the value of the designated column in the current row
 of this `ResultSet` object as
 a `java.sql.BigDecimal` in the Java programming language.

**参数**

- **columnIndex** — the first column is 1, the second is 2, ...
- **scale** — the number of digits to the right of the decimal point

**返回**

- the column value; if the value is SQL `NULL`, the value returned is `null`

**异常**

- **SQLException** — if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> **⚠ Deprecated** — Use `getBigDecimal(int columnIndex)` or `getBigDecimal(String columnLabel)`
