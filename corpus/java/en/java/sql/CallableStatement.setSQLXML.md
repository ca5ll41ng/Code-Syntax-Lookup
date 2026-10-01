---
id: "java-en-function-callablestatement-setsqlxml"
language: "java"
lang: "en"
category: "function"
name: "CallableStatement.setSQLXML"
signature: "void setSQLXML(String parameterName, SQLXML xmlObject) throws SQLException"
title: "CallableStatement.setSQLXML"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/CallableStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CallableStatement.setSQLXML

```java
void setSQLXML(String parameterName, SQLXML xmlObject) throws SQLException
```

Sets the designated parameter to the given `java.sql.SQLXML` object. The driver converts this to an
 `SQL XML` value when it sends it to the database.

**参数**

- **parameterName** — the name of the parameter
- **xmlObject** — a `SQLXML` object that maps an `SQL XML` value

**异常**

- **SQLException** — if parameterName does not correspond to a named parameter; if a database access error occurs; this method is called on a closed `CallableStatement` or the `java.xml.transform.Result`, `Writer` or `OutputStream` has not been closed for the `SQLXML` object
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.6*
