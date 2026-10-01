---
id: "java-en-function-rowset-setcharacterstream"
language: "java"
lang: "en"
category: "function"
name: "RowSet.setCharacterStream"
signature: "void setCharacterStream(int parameterIndex, Reader reader, int length) throws SQLException"
title: "RowSet.setCharacterStream"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.setCharacterStream

```java
void setCharacterStream(int parameterIndex, Reader reader, int length) throws SQLException
```

Sets the designated parameter in this `RowSet` object's command
 to the given `java.io.Reader` value.
 It may be more practical to send a very large UNICODE value via a
 `java.io.Reader` rather than as a `LONGVARCHAR`
 parameter. The driver will read the data from the stream
 as needed until it reaches end-of-file.

 

**Note:** This stream object can either be a standard
 Java stream object or your own subclass that implements the
 standard interface.

**参数**

- **parameterIndex** — the first parameter is 1, the second is 2, ...
- **reader** — the `Reader` object that contains the UNICODE data to be set
- **length** — the number of characters in the stream

**异常**

- **SQLException** — if a database access error occurs
