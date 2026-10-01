---
id: "java-en-function-sqloutput-writeurl"
language: "java"
lang: "en"
category: "function"
name: "SQLOutput.writeURL"
signature: "void writeURL(java.net.URL x) throws SQLException"
title: "SQLOutput.writeURL"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLOutput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLOutput.writeURL

```java
void writeURL(java.net.URL x) throws SQLException
```

Writes a SQL `DATALINK` value to the stream.

**参数**

- **x** — a `java.net.URL` object representing the data of SQL DATALINK type

**异常**

- **SQLException** — if a database access error occurs
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.4*
