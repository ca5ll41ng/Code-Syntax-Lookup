---
id: "java-en-function-callablestatement-setdouble"
language: "java"
lang: "en"
category: "function"
name: "CallableStatement.setDouble"
signature: "void setDouble(String parameterName, double x) throws SQLException"
title: "CallableStatement.setDouble"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/CallableStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CallableStatement.setDouble

```java
void setDouble(String parameterName, double x) throws SQLException
```

Sets the designated parameter to the given Java `double` value.
 The driver converts this
 to an SQL `DOUBLE` value when it sends it to the database.

**参数**

- **parameterName** — the name of the parameter
- **x** — the parameter value

**异常**

- **SQLException** — if parameterName does not correspond to a named parameter; if a database access error occurs or this method is called on a closed `CallableStatement`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

**参见**

- #getDouble

> *Since 1.4*
