---
id: "java-en-function-callablestatement-seturl"
language: "java"
lang: "en"
category: "function"
name: "CallableStatement.setURL"
signature: "void setURL(String parameterName, java.net.URL val) throws SQLException"
title: "CallableStatement.setURL"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/CallableStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CallableStatement.setURL

```java
void setURL(String parameterName, java.net.URL val) throws SQLException
```

Sets the designated parameter to the given `java.net.URL` object.
 The driver converts this to an SQL `DATALINK` value when
 it sends it to the database.

**参数**

- **parameterName** — the name of the parameter
- **val** — the parameter value

**异常**

- **SQLException** — if parameterName does not correspond to a named parameter; if a database access error occurs; this method is called on a closed `CallableStatement` or if a URL is malformed
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

**参见**

- #getURL

> *Since 1.4*
