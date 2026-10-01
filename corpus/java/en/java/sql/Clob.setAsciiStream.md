---
id: "java-en-function-clob-setasciistream"
language: "java"
lang: "en"
category: "function"
name: "Clob.setAsciiStream"
signature: "java.io.OutputStream setAsciiStream(long pos) throws SQLException"
title: "Clob.setAsciiStream"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Clob.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Clob.setAsciiStream

```java
java.io.OutputStream setAsciiStream(long pos) throws SQLException
```

Retrieves a stream to be used to write Ascii characters to the
 `CLOB` value that this `Clob` object represents,
 starting at position `pos`.  Characters written to the stream
 will overwrite the existing characters
 in the `Clob` object starting at the position
 `pos`.  If the end of the `Clob` value is reached
 while writing characters to the stream, then the length of the `Clob`
 value will be increased to accommodate the extra characters.
 

 **Note:** If the value specified for `pos`
 is greater than the length+1 of the `CLOB` value then the
 behavior is undefined. Some JDBC drivers may throw an
 `SQLException` while other drivers may support this
 operation.

**参数**

- **pos** — the position at which to start writing to this `CLOB` object; The first position is 1

**返回**

- the stream to which ASCII encoded characters can be written

**异常**

- **SQLException** — if there is an error accessing the `CLOB` value or if pos is less than 1
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

**参见**

- #getAsciiStream

> *Since 1.4*
