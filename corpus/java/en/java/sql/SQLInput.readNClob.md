---
id: "java-en-function-sqlinput-readnclob"
language: "java"
lang: "en"
category: "function"
name: "SQLInput.readNClob"
signature: "NClob readNClob() throws SQLException"
title: "SQLInput.readNClob"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLInput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLInput.readNClob

```java
NClob readNClob() throws SQLException
```

Reads an SQL `NCLOB` value from the stream and returns it as a
 `NClob` object in the Java programming language.

**返回**

- a `NClob` object representing data of the SQL `NCLOB` value at the head of the stream; `null` if the value read is SQL `NULL`

**异常**

- **SQLException** — if a database access error occurs
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.6*
