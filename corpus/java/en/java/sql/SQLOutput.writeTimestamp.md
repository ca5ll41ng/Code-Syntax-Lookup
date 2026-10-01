---
id: "java-en-function-sqloutput-writetimestamp"
language: "java"
lang: "en"
category: "function"
name: "SQLOutput.writeTimestamp"
signature: "void writeTimestamp(java.sql.Timestamp x) throws SQLException"
title: "SQLOutput.writeTimestamp"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLOutput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLOutput.writeTimestamp

```java
void writeTimestamp(java.sql.Timestamp x) throws SQLException
```

Writes the next attribute to the stream as a java.sql.Timestamp object.
 Writes the next attribute to the stream as a `java.sql.Date` object
 in the Java programming language.

**参数**

- **x** — the value to pass to the database

**异常**

- **SQLException** — if a database access error occurs
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
