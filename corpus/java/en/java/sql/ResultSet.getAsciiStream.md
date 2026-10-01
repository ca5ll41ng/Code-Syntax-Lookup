---
id: "java-en-function-resultset-getasciistream"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.getAsciiStream"
signature: "java.io.InputStream getAsciiStream(int columnIndex) throws SQLException"
title: "ResultSet.getAsciiStream"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.getAsciiStream

```java
java.io.InputStream getAsciiStream(int columnIndex) throws SQLException
```

Retrieves the value of the designated column in the current row
 of this `ResultSet` object as
 a stream of ASCII characters. The value can then be read in chunks from the
 stream. This method is particularly
 suitable for retrieving large `LONGVARCHAR` values.
 The JDBC driver will
 do any necessary conversion from the database format into ASCII.

 

**Note:** All the data in the returned stream must be
 read prior to getting the value of any other column. The next
 call to a getter method implicitly closes the stream.  Also, a
 stream may return `0` when the method
 `InputStream.available`
 is called whether there is data available or not.

**参数**

- **columnIndex** — the first column is 1, the second is 2, ...

**返回**

- a Java input stream that delivers the database column value as a stream of one-byte ASCII characters; if the value is SQL `NULL`, the value returned is `null`

**异常**

- **SQLException** — if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
