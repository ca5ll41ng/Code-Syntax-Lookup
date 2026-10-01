---
id: "java-en-function-sqloutput-writeblob"
language: "java"
lang: "en"
category: "function"
name: "SQLOutput.writeBlob"
signature: "void writeBlob(Blob x) throws SQLException"
title: "SQLOutput.writeBlob"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLOutput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLOutput.writeBlob

```java
void writeBlob(Blob x) throws SQLException
```

Writes an SQL `BLOB` value to the stream.

**参数**

- **x** — a `Blob` object representing data of an SQL `BLOB` value

**异常**

- **SQLException** — if a database access error occurs
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
