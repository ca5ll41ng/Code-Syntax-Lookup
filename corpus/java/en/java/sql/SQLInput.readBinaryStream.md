---
id: "java-en-function-sqlinput-readbinarystream"
language: "java"
lang: "en"
category: "function"
name: "SQLInput.readBinaryStream"
signature: "java.io.InputStream readBinaryStream() throws SQLException"
title: "SQLInput.readBinaryStream"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLInput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLInput.readBinaryStream

```java
java.io.InputStream readBinaryStream() throws SQLException
```

Reads the next attribute in the stream and returns it as a stream of uninterpreted
 bytes.

**返回**

- the attribute; if the value is SQL `NULL`, returns `null`

**异常**

- **SQLException** — if a database access error occurs
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
