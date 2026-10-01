---
id: "java-en-function-callablestatement-setnull"
language: "java"
lang: "en"
category: "function"
name: "CallableStatement.setNull"
signature: "void setNull(String parameterName, int sqlType) throws SQLException"
title: "CallableStatement.setNull"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/CallableStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CallableStatement.setNull

```java
void setNull(String parameterName, int sqlType) throws SQLException
```

Sets the designated parameter to SQL `NULL`.

 

**Note:** You must specify the parameter's SQL type.

**参数**

- **parameterName** — the name of the parameter
- **sqlType** — the SQL type code defined in `java.sql.Types`

**异常**

- **SQLException** — if parameterName does not correspond to a named parameter; if a database access error occurs or this method is called on a closed `CallableStatement`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.4*
