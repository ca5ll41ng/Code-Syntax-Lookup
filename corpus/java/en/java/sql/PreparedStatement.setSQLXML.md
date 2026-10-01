---
id: "java-en-function-preparedstatement-setsqlxml"
language: "java"
lang: "en"
category: "function"
name: "PreparedStatement.setSQLXML"
signature: "void setSQLXML(int parameterIndex, SQLXML xmlObject) throws SQLException"
title: "PreparedStatement.setSQLXML"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/PreparedStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PreparedStatement.setSQLXML

```java
void setSQLXML(int parameterIndex, SQLXML xmlObject) throws SQLException
```

Sets the designated parameter to the given `java.sql.SQLXML` object.
 The driver converts this to an
 SQL `XML` value when it sends it to the database.

**参数**

- **parameterIndex** — index of the first parameter is 1, the second is 2, ...
- **xmlObject** — a `SQLXML` object that maps an SQL `XML` value

**异常**

- **SQLException** — if parameterIndex does not correspond to a parameter marker in the SQL statement; if a database access error occurs; this method is called on a closed `PreparedStatement` or the `java.xml.transform.Result`, `Writer` or `OutputStream` has not been closed for the `SQLXML` object
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.6*
