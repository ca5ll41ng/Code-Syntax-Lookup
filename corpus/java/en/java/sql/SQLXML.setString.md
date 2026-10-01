---
id: "java-en-function-sqlxml-setstring"
language: "java"
lang: "en"
category: "function"
name: "SQLXML.setString"
signature: "void setString(String value) throws SQLException"
title: "SQLXML.setString"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLXML.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLXML.setString

```java
void setString(String value) throws SQLException
```

Sets the XML value designated by this SQLXML instance to the given String representation.
 The format of this String is defined by org.xml.sax.InputSource,
 where the characters in the stream represent the unicode code points for
 XML according to section 2 and appendix B of the XML 1.0 specification.
 Although an encoding declaration other than unicode may be present,
 the encoding of the String is unicode.
 The behavior of this method is the same as ResultSet.updateString()
 when the designated column of the ResultSet has a type java.sql.Types of SQLXML.
 

 The SQL XML object becomes not writable when this method is called and
 may also become not readable depending on implementation.

**参数**

- **value** — the XML value

**异常**

- **SQLException** — if there is an error processing the XML value. The getCause() method of the exception may provide a more detailed exception, for example, if the stream does not contain valid characters. An exception is thrown if the state is not writable.
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.6*
