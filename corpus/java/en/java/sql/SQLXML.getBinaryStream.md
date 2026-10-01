---
id: "java-en-function-sqlxml-getbinarystream"
language: "java"
lang: "en"
category: "function"
name: "SQLXML.getBinaryStream"
signature: "InputStream getBinaryStream() throws SQLException"
title: "SQLXML.getBinaryStream"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLXML.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLXML.getBinaryStream

```java
InputStream getBinaryStream() throws SQLException
```

Retrieves the XML value designated by this SQLXML instance as a stream.
 The bytes of the input stream are interpreted according to appendix F of the XML 1.0 specification.
 The behavior of this method is the same as ResultSet.getBinaryStream()
 when the designated column of the ResultSet has a type java.sql.Types of SQLXML.
 

 The SQL XML object becomes not readable when this method is called and
 may also become not writable depending on implementation.

**返回**

- a stream containing the XML data.

**异常**

- **SQLException** — if there is an error processing the XML value. An exception is thrown if the state is not readable.
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.6*
