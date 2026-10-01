---
id: "java-en-function-sqlxml-setcharacterstream"
language: "java"
lang: "en"
category: "function"
name: "SQLXML.setCharacterStream"
signature: "Writer setCharacterStream() throws SQLException"
title: "SQLXML.setCharacterStream"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLXML.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLXML.setCharacterStream

```java
Writer setCharacterStream() throws SQLException
```

Retrieves a stream to be used to write the XML value that this SQLXML instance represents.
 The format of this stream is defined by org.xml.sax.InputSource,
 where the characters in the stream represent the unicode code points for
 XML according to section 2 and appendix B of the XML 1.0 specification.
 Although an encoding declaration other than unicode may be present,
 the encoding of the stream is unicode.
 The behavior of this method is the same as ResultSet.updateCharacterStream()
 when the designated column of the ResultSet has a type java.sql.Types of SQLXML.
 

 The SQL XML object becomes not writable when this method is called and
 may also become not readable depending on implementation.

**返回**

- a stream to which data can be written.

**异常**

- **SQLException** — if there is an error processing the XML value. The getCause() method of the exception may provide a more detailed exception, for example, if the stream does not contain valid characters. An exception is thrown if the state is not writable.
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.6*
