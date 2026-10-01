---
id: "java-en-function-callablestatement-gettimestamp"
language: "java"
lang: "en"
category: "function"
name: "CallableStatement.getTimestamp"
signature: "java.sql.Timestamp getTimestamp(int parameterIndex) throws SQLException"
title: "CallableStatement.getTimestamp"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/CallableStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CallableStatement.getTimestamp

```java
java.sql.Timestamp getTimestamp(int parameterIndex) throws SQLException
```

Retrieves the value of the designated JDBC `TIMESTAMP` parameter as a
 `java.sql.Timestamp` object.

**参数**

- **parameterIndex** — the first parameter is 1, the second is 2, and so on

**返回**

- the parameter value.  If the value is SQL `NULL`, the result is `null`.

**异常**

- **SQLException** — if the parameterIndex is not valid; if a database access error occurs or this method is called on a closed `CallableStatement`

**参见**

- #setTimestamp
