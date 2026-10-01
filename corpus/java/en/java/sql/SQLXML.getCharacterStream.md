---
id: "java-en-function-sqlxml-getcharacterstream"
language: "java"
lang: "en"
category: "function"
name: "SQLXML.getCharacterStream"
signature: "Reader getCharacterStream() throws SQLException"
title: "SQLXML.getCharacterStream"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLXML.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLXML.getCharacterStream

```java
Reader getCharacterStream() throws SQLException
```

Retrieves the XML value designated by this SQLXML instance as a java.io.Reader object.
 The format of this stream is defined by org.xml.sax.InputSource,
 where the characters in the stream represent the unicode code points for
 XML according to section 2 and appendix B of the XML 1.0 specification.
 Although an encoding declaration other than unicode may be present,
 the encoding of the stream is unicode.
 The behavior of this method is the same as ResultSet.getCharacterStream()
 when the designated column of the ResultSet has a type java.sql.Types of SQLXML.
 

 The SQL XML object becomes not readable when this method is called and
 may also become not writable depending on implementation.

**返回**

- a stream containing the XML data.

**异常**

- **SQLException** — if there is an error processing the XML value. The getCause() method of the exception may provide a more detailed exception, for example, if the stream does not contain valid characters. An exception is thrown if the state is not readable.
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.6*
