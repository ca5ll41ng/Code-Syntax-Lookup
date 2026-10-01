---
id: "java-en-function-clob-getcharacterstream"
language: "java"
lang: "en"
category: "function"
name: "Clob.getCharacterStream"
signature: "java.io.Reader getCharacterStream() throws SQLException"
title: "Clob.getCharacterStream"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Clob.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Clob.getCharacterStream

```java
java.io.Reader getCharacterStream() throws SQLException
```

Retrieves the `CLOB` value designated by this `Clob`
 object as a `java.io.Reader` object (or as a stream of
 characters).

**返回**

- a `java.io.Reader` object containing the `CLOB` data

**异常**

- **SQLException** — if there is an error accessing the `CLOB` value
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

**参见**

- #setCharacterStream

> *Since 1.2*
