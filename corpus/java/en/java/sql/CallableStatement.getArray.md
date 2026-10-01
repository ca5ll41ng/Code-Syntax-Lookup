---
id: "java-en-function-callablestatement-getarray"
language: "java"
lang: "en"
category: "function"
name: "CallableStatement.getArray"
signature: "Array getArray (int parameterIndex) throws SQLException"
title: "CallableStatement.getArray"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/CallableStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CallableStatement.getArray

```java
Array getArray (int parameterIndex) throws SQLException
```

Retrieves the value of the designated JDBC `ARRAY` parameter as an
 `java.sql.Array` object in the Java programming language.

**参数**

- **parameterIndex** — the first parameter is 1, the second is 2, and so on

**返回**

- the parameter value as an `Array` object in the Java programming language.  If the value was SQL `NULL`, the value `null` is returned.

**异常**

- **SQLException** — if the parameterIndex is not valid; if a database access error occurs or this method is called on a closed `CallableStatement`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
