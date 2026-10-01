---
id: "java-en-function-callablestatement-getbigdecimal"
language: "java"
lang: "en"
category: "function"
name: "CallableStatement.getBigDecimal"
signature: "BigDecimal getBigDecimal(int parameterIndex, int scale) throws SQLException"
title: "CallableStatement.getBigDecimal"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/CallableStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CallableStatement.getBigDecimal

```java
BigDecimal getBigDecimal(int parameterIndex, int scale) throws SQLException
```

Retrieves the value of the designated JDBC `NUMERIC` parameter as a
 `java.math.BigDecimal` object with scale digits to
 the right of the decimal point.

**参数**

- **parameterIndex** — the first parameter is 1, the second is 2, and so on
- **scale** — the number of digits to the right of the decimal point

**返回**

- the parameter value.  If the value is SQL `NULL`, the result is `null`.

**异常**

- **SQLException** — if the parameterIndex is not valid; if a database access error occurs or this method is called on a closed `CallableStatement`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

**参见**

- #setBigDecimal

> **⚠ Deprecated** — use `getBigDecimal(int parameterIndex)` or `getBigDecimal(String parameterName)`
