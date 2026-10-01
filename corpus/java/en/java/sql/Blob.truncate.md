---
id: "java-en-function-blob-truncate"
language: "java"
lang: "en"
category: "function"
name: "Blob.truncate"
signature: "void truncate(long len) throws SQLException"
title: "Blob.truncate"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Blob.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Blob.truncate

```java
void truncate(long len) throws SQLException
```

Truncates the `BLOB` value that this `Blob`
 object represents to be `len` bytes in length.
 

 **Note:** If the value specified for `pos`
 is greater than the length+1 of the `BLOB` value then the
 behavior is undefined. Some JDBC drivers may throw an
 `SQLException` while other drivers may support this
 operation.

**参数**

- **len** — the length, in bytes, to which the `BLOB` value that this `Blob` object represents should be truncated

**异常**

- **SQLException** — if there is an error accessing the `BLOB` value or if len is less than 0
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.4*
