---
id: "java-en-function-sqloutput-writebigdecimal"
language: "java"
lang: "en"
category: "function"
name: "SQLOutput.writeBigDecimal"
signature: "void writeBigDecimal(java.math.BigDecimal x) throws SQLException"
title: "SQLOutput.writeBigDecimal"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLOutput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLOutput.writeBigDecimal

```java
void writeBigDecimal(java.math.BigDecimal x) throws SQLException
```

Writes the next attribute to the stream as a java.math.BigDecimal object.
 Writes the next attribute to the stream as a `String`
 in the Java programming language.

**参数**

- **x** — the value to pass to the database

**异常**

- **SQLException** — if a database access error occurs
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
