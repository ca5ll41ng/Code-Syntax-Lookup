---
id: "java-en-function-sqloutput-writerowid"
language: "java"
lang: "en"
category: "function"
name: "SQLOutput.writeRowId"
signature: "void writeRowId(RowId x) throws SQLException"
title: "SQLOutput.writeRowId"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLOutput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLOutput.writeRowId

```java
void writeRowId(RowId x) throws SQLException
```

Writes an SQL `ROWID` value to the stream.

**参数**

- **x** — a `RowId` object representing data of an SQL `ROWID` value

**异常**

- **SQLException** — if a database access error occurs
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.6*
