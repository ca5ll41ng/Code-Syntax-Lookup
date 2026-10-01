---
id: "java-en-function-sqlinput-readurl"
language: "java"
lang: "en"
category: "function"
name: "SQLInput.readURL"
signature: "java.net.URL readURL() throws SQLException"
title: "SQLInput.readURL"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLInput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLInput.readURL

```java
java.net.URL readURL() throws SQLException
```

Reads an SQL `DATALINK` value from the stream and returns it as a
 `java.net.URL` object in the Java programming language.

**返回**

- a `java.net.URL` object.

**异常**

- **SQLException** — if a database access error occurs, or if a URL is malformed
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.4*
