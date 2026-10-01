---
id: "java-en-function-sqloutput-writelong"
language: "java"
lang: "en"
category: "function"
name: "SQLOutput.writeLong"
signature: "void writeLong(long x) throws SQLException"
title: "SQLOutput.writeLong"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLOutput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLOutput.writeLong

```java
void writeLong(long x) throws SQLException
```

Writes the next attribute to the stream as a Java long.
 Writes the next attribute to the stream as a `String`
 in the Java programming language.

**参数**

- **x** — the value to pass to the database

**异常**

- **SQLException** — if a database access error occurs
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
