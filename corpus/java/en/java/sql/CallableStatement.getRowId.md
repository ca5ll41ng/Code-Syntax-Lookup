---
id: "java-en-function-callablestatement-getrowid"
language: "java"
lang: "en"
category: "function"
name: "CallableStatement.getRowId"
signature: "RowId getRowId(int parameterIndex) throws SQLException"
title: "CallableStatement.getRowId"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/CallableStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CallableStatement.getRowId

```java
RowId getRowId(int parameterIndex) throws SQLException
```

Retrieves the value of the designated JDBC `ROWID` parameter as a
 `java.sql.RowId` object.

**参数**

- **parameterIndex** — the first parameter is 1, the second is 2,...

**返回**

- a `RowId` object that represents the JDBC `ROWID` value is used as the designated parameter. If the parameter contains a SQL `NULL`, then a `null` value is returned.

**异常**

- **SQLException** — if the parameterIndex is not valid; if a database access error occurs or this method is called on a closed `CallableStatement`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.6*
