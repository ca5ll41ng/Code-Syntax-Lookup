---
id: "java-en-function-clob-getasciistream"
language: "java"
lang: "en"
category: "function"
name: "Clob.getAsciiStream"
signature: "java.io.InputStream getAsciiStream() throws SQLException"
title: "Clob.getAsciiStream"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Clob.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Clob.getAsciiStream

```java
java.io.InputStream getAsciiStream() throws SQLException
```

Retrieves the `CLOB` value designated by this `Clob`
 object as an ascii stream.

**返回**

- a `java.io.InputStream` object containing the `CLOB` data

**异常**

- **SQLException** — if there is an error accessing the `CLOB` value
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

**参见**

- #setAsciiStream

> *Since 1.2*
