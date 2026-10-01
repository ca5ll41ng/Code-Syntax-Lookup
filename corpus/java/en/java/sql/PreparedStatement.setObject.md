---
id: "java-en-function-preparedstatement-setobject"
language: "java"
lang: "en"
category: "function"
name: "PreparedStatement.setObject"
signature: "void setObject(int parameterIndex, Object x, int targetSqlType) throws SQLException"
title: "PreparedStatement.setObject"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/PreparedStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PreparedStatement.setObject

```java
void setObject(int parameterIndex, Object x, int targetSqlType) throws SQLException
```

Sets the value of the designated parameter with the given object.

 This method is similar to `setObject(int parameterIndex,
 Object x, int targetSqlType, int scaleOrLength)`,
 except that it assumes a scale of zero.

**参数**

- **parameterIndex** — the first parameter is 1, the second is 2, ...
- **x** — the object containing the input parameter value
- **targetSqlType** — the SQL type (as defined in java.sql.Types) to be sent to the database

**异常**

- **SQLException** — if parameterIndex does not correspond to a parameter marker in the SQL statement; if a database access error occurs or this method is called on a closed PreparedStatement
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support the specified targetSqlType

**参见**

- Types
