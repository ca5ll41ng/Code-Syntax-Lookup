---
id: "java-en-function-blob-length"
language: "java"
lang: "en"
category: "function"
name: "Blob.length"
signature: "long length() throws SQLException"
title: "Blob.length"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Blob.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Blob.length

```java
long length() throws SQLException
```

Returns the number of bytes in the `BLOB` value
 designated by this `Blob` object.

**返回**

- length of the `BLOB` in bytes

**异常**

- **SQLException** — if there is an error accessing the length of the `BLOB`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
