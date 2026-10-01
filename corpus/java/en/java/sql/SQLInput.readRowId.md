---
id: "java-en-function-sqlinput-readrowid"
language: "java"
lang: "en"
category: "function"
name: "SQLInput.readRowId"
signature: "RowId readRowId() throws SQLException"
title: "SQLInput.readRowId"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLInput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLInput.readRowId

```java
RowId readRowId() throws SQLException
```

Reads an SQL `ROWID` value from the stream and returns it as a
 `RowId` object in the Java programming language.

**返回**

- a `RowId` object representing data of the SQL `ROWID` value at the head of the stream; `null` if the value read is SQL `NULL`

**异常**

- **SQLException** — if a database access error occurs
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.6*
