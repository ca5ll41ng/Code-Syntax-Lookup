---
id: "java-en-function-blob-setbytes"
language: "java"
lang: "en"
category: "function"
name: "Blob.setBytes"
signature: "int setBytes(long pos, byte[] bytes) throws SQLException"
title: "Blob.setBytes"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Blob.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Blob.setBytes

```java
int setBytes(long pos, byte[] bytes) throws SQLException
```

Writes the given array of bytes to the `BLOB` value that
 this `Blob` object represents, starting at position
 `pos`, and returns the number of bytes written.
 The array of bytes will overwrite the existing bytes
 in the `Blob` object starting at the position
 `pos`.  If the end of the `Blob` value is reached
 while writing the array of bytes, then the length of the `Blob`
 value will be increased to accommodate the extra bytes.
 

 **Note:** If the value specified for `pos`
 is greater than the length+1 of the `BLOB` value then the
 behavior is undefined. Some JDBC drivers may throw an
 `SQLException` while other drivers may support this
 operation.

**参数**

- **pos** — the position in the `BLOB` object at which to start writing; the first position is 1
- **bytes** — the array of bytes to be written to the `BLOB` value that this `Blob` object represents

**返回**

- the number of bytes written

**异常**

- **SQLException** — if there is an error accessing the `BLOB` value or if pos is less than 1
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

**参见**

- #getBytes

> *Since 1.4*
