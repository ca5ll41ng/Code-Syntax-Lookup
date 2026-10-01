---
id: "java-en-function-sqlinput-readcharacterstream"
language: "java"
lang: "en"
category: "function"
name: "SQLInput.readCharacterStream"
signature: "java.io.Reader readCharacterStream() throws SQLException"
title: "SQLInput.readCharacterStream"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLInput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLInput.readCharacterStream

```java
java.io.Reader readCharacterStream() throws SQLException
```

Reads the next attribute in the stream and returns it as a stream of Unicode characters.

**返回**

- the attribute; if the value is SQL `NULL`, returns `null`

**异常**

- **SQLException** — if a database access error occurs
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
