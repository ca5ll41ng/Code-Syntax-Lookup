---
id: "java-en-function-sqlinput-readarray"
language: "java"
lang: "en"
category: "function"
name: "SQLInput.readArray"
signature: "Array readArray() throws SQLException"
title: "SQLInput.readArray"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLInput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLInput.readArray

```java
Array readArray() throws SQLException
```

Reads an SQL `ARRAY` value from the stream and returns it as an
 `Array` object in the Java programming language.

**返回**

- an `Array` object representing data of the SQL `ARRAY` value at the head of the stream; `null` if the value read is SQL `NULL`

**异常**

- **SQLException** — if a database access error occurs
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
