---
id: "java-en-function-preparedstatement-setunicodestream"
language: "java"
lang: "en"
category: "function"
name: "PreparedStatement.setUnicodeStream"
signature: "void setUnicodeStream(int parameterIndex, java.io.InputStream x, int length) throws SQLException"
title: "PreparedStatement.setUnicodeStream"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/PreparedStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PreparedStatement.setUnicodeStream

```java
void setUnicodeStream(int parameterIndex, java.io.InputStream x, int length) throws SQLException
```

Sets the designated parameter to the given input stream, which
 will have the specified number of bytes.

 When a very large Unicode value is input to a `LONGVARCHAR`
 parameter, it may be more practical to send it via a
 `java.io.InputStream` object. The data will be read from the
 stream as needed until end-of-file is reached.  The JDBC driver will
 do any necessary conversion from Unicode to the database char format.

The byte format of the Unicode stream must be a Java UTF-8, as defined in the
Java Virtual Machine Specification.

 

**Note:** This stream object can either be a standard
 Java stream object or your own subclass that implements the
 standard interface.

**参数**

- **parameterIndex** — the first parameter is 1, the second is 2, ...
- **x** — a `java.io.InputStream` object that contains the Unicode parameter value
- **length** — the number of bytes in the stream

**异常**

- **SQLException** — if parameterIndex does not correspond to a parameter marker in the SQL statement; if a database access error occurs or this method is called on a closed `PreparedStatement`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> **⚠ Deprecated** — Use `setCharacterStream`
