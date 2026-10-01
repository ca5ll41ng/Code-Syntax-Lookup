---
id: "java-en-function-callablestatement-getclob"
language: "java"
lang: "en"
category: "function"
name: "CallableStatement.getClob"
signature: "Clob getClob (int parameterIndex) throws SQLException"
title: "CallableStatement.getClob"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/CallableStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CallableStatement.getClob

```java
Clob getClob (int parameterIndex) throws SQLException
```

Retrieves the value of the designated JDBC `CLOB` parameter as a
 `java.sql.Clob` object in the Java programming language.

**参数**

- **parameterIndex** — the first parameter is 1, the second is 2, and so on

**返回**

- the parameter value as a `Clob` object in the Java programming language.  If the value was SQL `NULL`, the value `null` is returned.

**异常**

- **SQLException** — if the parameterIndex is not valid; if a database access error occurs or this method is called on a closed `CallableStatement`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
