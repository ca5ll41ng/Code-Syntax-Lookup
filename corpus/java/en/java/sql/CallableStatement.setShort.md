---
id: "java-en-function-callablestatement-setshort"
language: "java"
lang: "en"
category: "function"
name: "CallableStatement.setShort"
signature: "void setShort(String parameterName, short x) throws SQLException"
title: "CallableStatement.setShort"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/CallableStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CallableStatement.setShort

```java
void setShort(String parameterName, short x) throws SQLException
```

Sets the designated parameter to the given Java `short` value.
 The driver converts this
 to an SQL `SMALLINT` value when it sends it to the database.

**参数**

- **parameterName** — the name of the parameter
- **x** — the parameter value

**异常**

- **SQLException** — if parameterName does not correspond to a named parameter; if a database access error occurs or this method is called on a closed `CallableStatement`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

**参见**

- #getShort

> *Since 1.4*
