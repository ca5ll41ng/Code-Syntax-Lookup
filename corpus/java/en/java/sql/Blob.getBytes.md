---
id: "java-en-function-blob-getbytes"
language: "java"
lang: "en"
category: "function"
name: "Blob.getBytes"
signature: "byte[] getBytes(long pos, int length) throws SQLException"
title: "Blob.getBytes"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Blob.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Blob.getBytes

```java
byte[] getBytes(long pos, int length) throws SQLException
```

Retrieves all or part of the `BLOB`
 value that this `Blob` object represents, as an array of
 bytes.  This `byte` array contains up to `length`
 consecutive bytes starting at position `pos`.

**参数**

- **pos** — the ordinal position of the first byte in the `BLOB` value to be extracted; the first byte is at position 1
- **length** — the number of consecutive bytes to be copied; the value for length must be 0 or greater

**返回**

- a byte array containing up to `length` consecutive bytes from the `BLOB` value designated by this `Blob` object, starting with the byte at position `pos`

**异常**

- **SQLException** — if there is an error accessing the `BLOB` value; if pos is less than 1 or length is less than 0
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

**参见**

- #setBytes

> *Since 1.2*
