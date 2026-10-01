---
id: "java-en-function-sqlxml-setbinarystream"
language: "java"
lang: "en"
category: "function"
name: "SQLXML.setBinaryStream"
signature: "OutputStream setBinaryStream() throws SQLException"
title: "SQLXML.setBinaryStream"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLXML.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLXML.setBinaryStream

```java
OutputStream setBinaryStream() throws SQLException
```

Retrieves a stream that can be used to write the XML value that this SQLXML instance represents.
 The stream begins at position 0.
 The bytes of the stream are interpreted according to appendix F of the XML 1.0 specification
 The behavior of this method is the same as ResultSet.updateBinaryStream()
 when the designated column of the ResultSet has a type java.sql.Types of SQLXML.
 

 The SQL XML object becomes not writable when this method is called and
 may also become not readable depending on implementation.

**返回**

- a stream to which data can be written.

**异常**

- **SQLException** — if there is an error processing the XML value. An exception is thrown if the state is not writable.
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.6*
