---
id: "java-en-function-sqloutput-writearray"
language: "java"
lang: "en"
category: "function"
name: "SQLOutput.writeArray"
signature: "void writeArray(Array x) throws SQLException"
title: "SQLOutput.writeArray"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLOutput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLOutput.writeArray

```java
void writeArray(Array x) throws SQLException
```

Writes an SQL `ARRAY` value to the stream.

**参数**

- **x** — an `Array` object representing data of an SQL `ARRAY` type

**异常**

- **SQLException** — if a database access error occurs
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
