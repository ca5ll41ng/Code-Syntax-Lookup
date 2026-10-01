---
id: "java-en-function-blob-setbinarystream"
language: "java"
lang: "en"
category: "function"
name: "Blob.setBinaryStream"
signature: "java.io.OutputStream setBinaryStream(long pos) throws SQLException"
title: "Blob.setBinaryStream"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Blob.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Blob.setBinaryStream

```java
java.io.OutputStream setBinaryStream(long pos) throws SQLException
```

Retrieves a stream that can be used to write to the `BLOB`
 value that this `Blob` object represents.  The stream begins
 at position `pos`.
 The  bytes written to the stream will overwrite the existing bytes
 in the `Blob` object starting at the position
 `pos`.  If the end of the `Blob` value is reached
 while writing to the stream, then the length of the `Blob`
 value will be increased to accommodate the extra bytes.
 

 **Note:** If the value specified for `pos`
 is greater than the length+1 of the `BLOB` value then the
 behavior is undefined. Some JDBC drivers may throw an
 `SQLException` while other drivers may support this
 operation.

**参数**

- **pos** — the position in the `BLOB` value at which to start writing; the first position is 1

**返回**

- a `java.io.OutputStream` object to which data can be written

**异常**

- **SQLException** — if there is an error accessing the `BLOB` value or if pos is less than 1
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

**参见**

- #getBinaryStream

> *Since 1.4*
