---
id: "java-en-function-preparedstatement-setcharacterstream"
language: "java"
lang: "en"
category: "function"
name: "PreparedStatement.setCharacterStream"
signature: "void setCharacterStream(int parameterIndex, java.io.Reader reader, int length) throws SQLException"
title: "PreparedStatement.setCharacterStream"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/PreparedStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PreparedStatement.setCharacterStream

```java
void setCharacterStream(int parameterIndex, java.io.Reader reader, int length) throws SQLException
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

- **parameterIndex** — the first parameter is 1, the second is 2, ...
- **reader** — the `java.io.Reader` object that contains the Unicode data
- **length** — the number of characters in the stream

**异常**

- **SQLException** — if parameterIndex does not correspond to a parameter marker in the SQL statement; if a database access error occurs or this method is called on a closed `PreparedStatement`

> *Since 1.2*
