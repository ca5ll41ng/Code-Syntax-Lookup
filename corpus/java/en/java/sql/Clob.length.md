---
id: "java-en-function-clob-length"
language: "java"
lang: "en"
category: "function"
name: "Clob.length"
signature: "long length() throws SQLException"
title: "Clob.length"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Clob.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Clob.length

```java
long length() throws SQLException
```

Retrieves the number of characters
 in the `CLOB` value
 designated by this `Clob` object.

**返回**

- length of the `CLOB` in characters

**异常**

- **SQLException** — if there is an error accessing the length of the `CLOB` value
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
