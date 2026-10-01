---
id: "java-en-function-sqloutput-writenstring"
language: "java"
lang: "en"
category: "function"
name: "SQLOutput.writeNString"
signature: "void writeNString(String x) throws SQLException"
title: "SQLOutput.writeNString"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLOutput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLOutput.writeNString

```java
void writeNString(String x) throws SQLException
```

Writes the next attribute to the stream as a `String`
 in the Java programming language. The driver converts this to a
 SQL `NCHAR` or
 `NVARCHAR` or `LONGNVARCHAR` value
 (depending on the argument's
 size relative to the driver's limits on `NVARCHAR` values)
 when it sends it to the stream.

**参数**

- **x** — the value to pass to the database

**异常**

- **SQLException** — if a database access error occurs
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.6*
