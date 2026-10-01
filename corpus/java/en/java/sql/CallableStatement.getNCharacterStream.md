---
id: "java-en-function-callablestatement-getncharacterstream"
language: "java"
lang: "en"
category: "function"
name: "CallableStatement.getNCharacterStream"
signature: "java.io.Reader getNCharacterStream(int parameterIndex) throws SQLException"
title: "CallableStatement.getNCharacterStream"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/CallableStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CallableStatement.getNCharacterStream

```java
java.io.Reader getNCharacterStream(int parameterIndex) throws SQLException
```

Retrieves the value of the designated parameter as a
 `java.io.Reader` object in the Java programming language.
 It is intended for use when
 accessing  `NCHAR`,`NVARCHAR`
 and `LONGNVARCHAR` parameters.

**参数**

- **parameterIndex** — the first parameter is 1, the second is 2, ...

**返回**

- a `java.io.Reader` object that contains the parameter value; if the value is SQL `NULL`, the value returned is `null` in the Java programming language.

**异常**

- **SQLException** — if the parameterIndex is not valid; if a database access error occurs or this method is called on a closed `CallableStatement`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.6*
