---
id: "java-en-function-sqlinput-readobject"
language: "java"
lang: "en"
category: "function"
name: "SQLInput.readObject"
signature: "Object readObject() throws SQLException"
title: "SQLInput.readObject"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLInput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLInput.readObject

```java
Object readObject() throws SQLException
```

Reads the datum at the head of the stream and returns it as an
 `Object` in the Java programming language.  The
 actual type of the object returned is determined by the default type
 mapping, and any customizations present in this stream's type map.

 

A type map is registered with the stream by the JDBC driver before the
 stream is passed to the application.

 

When the datum at the head of the stream is an SQL `NULL`,
 the method returns `null`.  If the datum is an SQL structured or distinct
 type, it determines the SQL type of the datum at the head of the stream.
 If the stream's type map has an entry for that SQL type, the driver
 constructs an object of the appropriate class and calls the method
 `SQLData.readSQL` on that object, which reads additional data from the
 stream, using the protocol described for that method.

**返回**

- the datum at the head of the stream as an `Object` in the Java programming language;`null` if the datum is SQL `NULL`

**异常**

- **SQLException** — if a database access error occurs
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
