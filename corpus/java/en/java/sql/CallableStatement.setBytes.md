---
id: "java-en-function-callablestatement-setbytes"
language: "java"
lang: "en"
category: "function"
name: "CallableStatement.setBytes"
signature: "void setBytes(String parameterName, byte x[]) throws SQLException"
title: "CallableStatement.setBytes"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/CallableStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CallableStatement.setBytes

```java
void setBytes(String parameterName, byte x[]) throws SQLException
```

Sets the designated parameter to the given Java array of bytes.
 The driver converts this to an SQL `VARBINARY` or
 `LONGVARBINARY` (depending on the argument's size relative
 to the driver's limits on `VARBINARY` values) when it sends
 it to the database.

**参数**

- **parameterName** — the name of the parameter
- **x** — the parameter value

**异常**

- **SQLException** — if parameterName does not correspond to a named parameter; if a database access error occurs or this method is called on a closed `CallableStatement`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

**参见**

- #getBytes

> *Since 1.4*
