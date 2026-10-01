---
id: "java-en-function-preparedstatement-setrowid"
language: "java"
lang: "en"
category: "function"
name: "PreparedStatement.setRowId"
signature: "void setRowId(int parameterIndex, RowId x) throws SQLException"
title: "PreparedStatement.setRowId"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/PreparedStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PreparedStatement.setRowId

```java
void setRowId(int parameterIndex, RowId x) throws SQLException
```

Sets the designated parameter to the given `java.sql.RowId` object. The
 driver converts this to a SQL `ROWID` value when it sends it
 to the database

**参数**

- **parameterIndex** — the first parameter is 1, the second is 2, ...
- **x** — the parameter value

**异常**

- **SQLException** — if parameterIndex does not correspond to a parameter marker in the SQL statement; if a database access error occurs or this method is called on a closed `PreparedStatement`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.6*
