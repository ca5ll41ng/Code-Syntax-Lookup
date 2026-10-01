---
id: "java-en-function-callablestatement-setbinarystream"
language: "java"
lang: "en"
category: "function"
name: "CallableStatement.setBinaryStream"
signature: "void setBinaryStream(String parameterName, java.io.InputStream x, int length) throws SQLException"
title: "CallableStatement.setBinaryStream"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/CallableStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CallableStatement.setBinaryStream

```java
void setBinaryStream(String parameterName, java.io.InputStream x, int length) throws SQLException
```

Sets the designated parameter to the given input stream, which will have
 the specified number of bytes.
 When a very large binary value is input to a `LONGVARBINARY`
 parameter, it may be more practical to send it via a
 `java.io.InputStream` object. The data will be read from the stream
 as needed until end-of-file is reached.

 

**Note:** This stream object can either be a standard
 Java stream object or your own subclass that implements the
 standard interface.

**参数**

- **parameterName** — the name of the parameter
- **x** — the java input stream which contains the binary parameter value
- **length** — the number of bytes in the stream

**异常**

- **SQLException** — if parameterName does not correspond to a named parameter; if a database access error occurs or this method is called on a closed `CallableStatement`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.4*
