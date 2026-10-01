---
id: "java-en-function-blob-getbinarystream"
language: "java"
lang: "en"
category: "function"
name: "Blob.getBinaryStream"
signature: "java.io.InputStream getBinaryStream () throws SQLException"
title: "Blob.getBinaryStream"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Blob.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Blob.getBinaryStream

```java
java.io.InputStream getBinaryStream () throws SQLException
```

Retrieves the `BLOB` value designated by this
 `Blob` instance as a stream.

**返回**

- a stream containing the `BLOB` data

**异常**

- **SQLException** — if there is an error accessing the `BLOB` value
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

**参见**

- #setBinaryStream

> *Since 1.2*
