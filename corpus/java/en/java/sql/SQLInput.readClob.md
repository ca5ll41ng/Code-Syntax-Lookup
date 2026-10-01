---
id: "java-en-function-sqlinput-readclob"
language: "java"
lang: "en"
category: "function"
name: "SQLInput.readClob"
signature: "Clob readClob() throws SQLException"
title: "SQLInput.readClob"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLInput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLInput.readClob

```java
Clob readClob() throws SQLException
```

Reads an SQL `CLOB` value from the stream and returns it as a
 `Clob` object in the Java programming language.

**返回**

- a `Clob` object representing data of the SQL `CLOB` value at the head of the stream; `null` if the value read is SQL `NULL`

**异常**

- **SQLException** — if a database access error occurs
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
