---
id: "java-en-function-rowset-setbinarystream"
language: "java"
lang: "en"
category: "function"
name: "RowSet.setBinaryStream"
signature: "void setBinaryStream(int parameterIndex, java.io.InputStream x, int length) throws SQLException"
title: "RowSet.setBinaryStream"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.setBinaryStream

```java
void setBinaryStream(int parameterIndex, java.io.InputStream x, int length) throws SQLException
```

Sets the designated parameter in this `RowSet` object's command
 to the given `java.io.InputStream` value.
 It may be more practical to send a very large binary value via a
 `java.io.InputStream` rather than as a `LONGVARBINARY`
 parameter. The driver will read the data from the stream
 as needed until it reaches end-of-file.

 

**Note:** This stream object can either be a standard
 Java stream object or your own subclass that implements the
 standard interface.

**参数**

- **parameterIndex** — the first parameter is 1, the second is 2, ...
- **x** — the java input stream which contains the binary parameter value
- **length** — the number of bytes in the stream

**异常**

- **SQLException** — if a database access error occurs
