---
id: "java-en-function-callablestatement-geturl"
language: "java"
lang: "en"
category: "function"
name: "CallableStatement.getURL"
signature: "java.net.URL getURL(int parameterIndex) throws SQLException"
title: "CallableStatement.getURL"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/CallableStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CallableStatement.getURL

```java
java.net.URL getURL(int parameterIndex) throws SQLException
```

Retrieves the value of the designated JDBC `DATALINK` parameter as a
 `java.net.URL` object.

**参数**

- **parameterIndex** — the first parameter is 1, the second is 2,...

**返回**

- a `java.net.URL` object that represents the JDBC `DATALINK` value used as the designated parameter

**异常**

- **SQLException** — if the parameterIndex is not valid; if a database access error occurs, this method is called on a closed `CallableStatement`, or if the URL being returned is not a valid URL on the Java platform
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

**参见**

- #setURL

> *Since 1.4*
