---
id: "java-en-function-callablestatement-setblob"
language: "java"
lang: "en"
category: "function"
name: "CallableStatement.setBlob"
signature: "void setBlob(String parameterName, InputStream inputStream, long length) throws SQLException"
title: "CallableStatement.setBlob"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/CallableStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CallableStatement.setBlob

```java
void setBlob(String parameterName, InputStream inputStream, long length) throws SQLException
```

Sets the designated parameter to an `InputStream` object.
 The `Inputstream` must contain the number
 of characters specified by length, otherwise a `SQLException` will be
 generated when the `CallableStatement` is executed.
 This method differs from the `setBinaryStream (int, InputStream, int)`
 method because it informs the driver that the parameter value should be
 sent to the server as a `BLOB`.  When the `setBinaryStream` method is used,
 the driver may have to do extra work to determine whether the parameter
 data should be sent to the server as a `LONGVARBINARY` or a `BLOB`

**参数**

- **parameterName** — the name of the parameter to be set the second is 2, ...
- **inputStream** — An object that contains the data to set the parameter value to.
- **length** — the number of bytes in the parameter data.

**异常**

- **SQLException** — if parameterName does not correspond to a named parameter; if the length specified is less than zero; if the number of bytes in the `InputStream` does not match the specified length; if a database access error occurs or this method is called on a closed `CallableStatement`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.6*
