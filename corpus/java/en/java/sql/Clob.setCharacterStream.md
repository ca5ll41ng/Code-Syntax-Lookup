---
id: "java-en-function-clob-setcharacterstream"
language: "java"
lang: "en"
category: "function"
name: "Clob.setCharacterStream"
signature: "java.io.Writer setCharacterStream(long pos) throws SQLException"
title: "Clob.setCharacterStream"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Clob.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Clob.setCharacterStream

```java
java.io.Writer setCharacterStream(long pos) throws SQLException
```

Retrieves a stream to be used to write a stream of Unicode characters
 to the `CLOB` value that this `Clob` object
 represents, at position `pos`. Characters written to the stream
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

- **pos** — the position at which to start writing to the `CLOB` value; The first position is 1

**返回**

- a stream to which Unicode encoded characters can be written

**异常**

- **SQLException** — if there is an error accessing the `CLOB` value or if pos is less than 1
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

**参见**

- #getCharacterStream

> *Since 1.4*
