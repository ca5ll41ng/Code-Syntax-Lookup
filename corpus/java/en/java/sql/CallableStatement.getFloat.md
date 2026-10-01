---
id: "java-en-function-callablestatement-getfloat"
language: "java"
lang: "en"
category: "function"
name: "CallableStatement.getFloat"
signature: "float getFloat(int parameterIndex) throws SQLException"
title: "CallableStatement.getFloat"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/CallableStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CallableStatement.getFloat

```java
float getFloat(int parameterIndex) throws SQLException
```

Retrieves the value of the designated JDBC `FLOAT` parameter
 as a `float` in the Java programming language.

**参数**

- **parameterIndex** — the first parameter is 1, the second is 2, and so on

**返回**

- the parameter value.  If the value is SQL `NULL`, the result is `0`.

**异常**

- **SQLException** — if the parameterIndex is not valid; if a database access error occurs or this method is called on a closed `CallableStatement`

**参见**

- #setFloat
