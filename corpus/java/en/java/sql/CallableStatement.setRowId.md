---
id: "java-en-function-callablestatement-setrowid"
language: "java"
lang: "en"
category: "function"
name: "CallableStatement.setRowId"
signature: "void setRowId(String parameterName, RowId x) throws SQLException"
title: "CallableStatement.setRowId"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/CallableStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CallableStatement.setRowId

```java
void setRowId(String parameterName, RowId x) throws SQLException
```

Sets the designated parameter to the given `java.sql.RowId` object. The
 driver converts this to a SQL `ROWID` when it sends it to the
 database.

**参数**

- **parameterName** — the name of the parameter
- **x** — the parameter value

**异常**

- **SQLException** — if parameterName does not correspond to a named parameter; if a database access error occurs or this method is called on a closed `CallableStatement`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.6*
