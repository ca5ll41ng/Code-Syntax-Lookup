---
id: "java-en-function-sqloutput-writefloat"
language: "java"
lang: "en"
category: "function"
name: "SQLOutput.writeFloat"
signature: "void writeFloat(float x) throws SQLException"
title: "SQLOutput.writeFloat"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLOutput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLOutput.writeFloat

```java
void writeFloat(float x) throws SQLException
```

Writes the next attribute to the stream as a Java float.
 Writes the next attribute to the stream as a `String`
 in the Java programming language.

**参数**

- **x** — the value to pass to the database

**异常**

- **SQLException** — if a database access error occurs
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
