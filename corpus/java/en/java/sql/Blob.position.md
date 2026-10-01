---
id: "java-en-function-blob-position"
language: "java"
lang: "en"
category: "function"
name: "Blob.position"
signature: "long position(byte pattern[], long start) throws SQLException"
title: "Blob.position"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Blob.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Blob.position

```java
long position(byte pattern[], long start) throws SQLException
```

Retrieves the byte position at which the specified byte array
 `pattern` begins within the `BLOB`
 value that this `Blob` object represents.
 The search for `pattern` begins at position
 `start`.

**参数**

- **pattern** — the byte array for which to search
- **start** — the position at which to begin searching; the first position is 1

**返回**

- the position at which the pattern appears, else -1

**异常**

- **SQLException** — if there is an error accessing the `BLOB` or if start is less than 1
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
