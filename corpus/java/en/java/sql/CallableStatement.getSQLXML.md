---
id: "java-en-function-callablestatement-getsqlxml"
language: "java"
lang: "en"
category: "function"
name: "CallableStatement.getSQLXML"
signature: "SQLXML getSQLXML(int parameterIndex) throws SQLException"
title: "CallableStatement.getSQLXML"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/CallableStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CallableStatement.getSQLXML

```java
SQLXML getSQLXML(int parameterIndex) throws SQLException
```

Retrieves the value of the designated `SQL XML` parameter as a
 `java.sql.SQLXML` object in the Java programming language.

**参数**

- **parameterIndex** — index of the first parameter is 1, the second is 2, ...

**返回**

- a `SQLXML` object that maps an `SQL XML` value

**异常**

- **SQLException** — if the parameterIndex is not valid; if a database access error occurs or this method is called on a closed `CallableStatement`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.6*
