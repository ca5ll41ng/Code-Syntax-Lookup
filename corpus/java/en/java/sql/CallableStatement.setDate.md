---
id: "java-en-function-callablestatement-setdate"
language: "java"
lang: "en"
category: "function"
name: "CallableStatement.setDate"
signature: "void setDate(String parameterName, java.sql.Date x) throws SQLException"
title: "CallableStatement.setDate"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/CallableStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CallableStatement.setDate

```java
void setDate(String parameterName, java.sql.Date x) throws SQLException
```

Sets the designated parameter to the given `java.sql.Date` value
 using the default time zone of the virtual machine that is running
 the application.
 The driver converts this
 to an SQL `DATE` value when it sends it to the database.

**参数**

- **parameterName** — the name of the parameter
- **x** — the parameter value

**异常**

- **SQLException** — if parameterName does not correspond to a named parameter; if a database access error occurs or this method is called on a closed `CallableStatement`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

**参见**

- #getDate

> *Since 1.4*
