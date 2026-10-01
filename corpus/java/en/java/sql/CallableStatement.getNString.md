---
id: "java-en-function-callablestatement-getnstring"
language: "java"
lang: "en"
category: "function"
name: "CallableStatement.getNString"
signature: "String getNString(int parameterIndex) throws SQLException"
title: "CallableStatement.getNString"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/CallableStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CallableStatement.getNString

```java
String getNString(int parameterIndex) throws SQLException
```

Retrieves the value of the designated `NCHAR`,
 `NVARCHAR`
 or `LONGNVARCHAR` parameter as
 a `String` in the Java programming language.
 

 For the fixed-length type JDBC `NCHAR`,
 the `String` object
 returned has exactly the same value the SQL
 `NCHAR` value had in the
 database, including any padding added by the database.

**参数**

- **parameterIndex** — index of the first parameter is 1, the second is 2, ...

**返回**

- a `String` object that maps an `NCHAR`, `NVARCHAR` or `LONGNVARCHAR` value

**异常**

- **SQLException** — if the parameterIndex is not valid; if a database access error occurs or this method is called on a closed `CallableStatement`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

**参见**

- #setNString

> *Since 1.6*
