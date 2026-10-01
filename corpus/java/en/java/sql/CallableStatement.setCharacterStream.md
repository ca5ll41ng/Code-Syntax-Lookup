---
id: "java-en-function-callablestatement-setcharacterstream"
language: "java"
lang: "en"
category: "function"
name: "CallableStatement.setCharacterStream"
signature: "void setCharacterStream(String parameterName, java.io.Reader reader, int length) throws SQLException"
title: "CallableStatement.setCharacterStream"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/CallableStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CallableStatement.setCharacterStream

```java
void setCharacterStream(String parameterName, java.io.Reader reader, int length) throws SQLException
```

Sets the designated parameter to the given `Reader`
 object, which is the given number of characters long.
 When a very large UNICODE value is input to a `LONGVARCHAR`
 parameter, it may be more practical to send it via a
 `java.io.Reader` object. The data will be read from the stream
 as needed until end-of-file is reached.  The JDBC driver will
 do any necessary conversion from UNICODE to the database char format.

 

**Note:** This stream object can either be a standard
 Java stream object or your own subclass that implements the
 standard interface.

**参数**

- **parameterName** — the name of the parameter
- **reader** — the `java.io.Reader` object that contains the UNICODE data used as the designated parameter
- **length** — the number of characters in the stream

**异常**

- **SQLException** — if parameterName does not correspond to a named parameter; if a database access error occurs or this method is called on a closed `CallableStatement`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.4*
