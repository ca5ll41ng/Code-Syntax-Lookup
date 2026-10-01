---
id: "java-en-function-callablestatement-setnclob"
language: "java"
lang: "en"
category: "function"
name: "CallableStatement.setNClob"
signature: "void setNClob(String parameterName, NClob value) throws SQLException"
title: "CallableStatement.setNClob"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/CallableStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CallableStatement.setNClob

```java
void setNClob(String parameterName, NClob value) throws SQLException
```

Sets the designated parameter to a `java.sql.NClob` object. The object
 implements the `java.sql.NClob` interface. This `NClob`
 object maps to a SQL `NCLOB`.

**参数**

- **parameterName** — the name of the parameter to be set
- **value** — the parameter value

**异常**

- **SQLException** — if parameterName does not correspond to a named parameter; if the driver does not support national character sets;  if the driver can detect that a data conversion error could occur; if a database access error occurs or this method is called on a closed `CallableStatement`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.6*
