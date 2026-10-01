---
id: "java-en-function-sqloutput-writeobject"
language: "java"
lang: "en"
category: "function"
name: "SQLOutput.writeObject"
signature: "void writeObject(SQLData x) throws SQLException"
title: "SQLOutput.writeObject"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLOutput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLOutput.writeObject

```java
void writeObject(SQLData x) throws SQLException
```

Writes to the stream the data contained in the given
 `SQLData` object.
 When the `SQLData` object is `null`, this
 method writes an SQL `NULL` to the stream.
 Otherwise, it calls the `SQLData.writeSQL`
 method of the given object, which
 writes the object's attributes to the stream.
 The implementation of the method `SQLData.writeSQL`
 calls the appropriate `SQLOutput` writer method(s)
 for writing each of the object's attributes in order.
 The attributes must be read from an `SQLInput`
 input stream and written to an `SQLOutput`
 output stream in the same order in which they were
 listed in the SQL definition of the user-defined type.

**参数**

- **x** — the object representing data of an SQL structured or distinct type

**异常**

- **SQLException** — if a database access error occurs
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
