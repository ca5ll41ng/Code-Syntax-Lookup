---
id: "java-en-function-sqldata-readsql"
language: "java"
lang: "en"
category: "function"
name: "SQLData.readSQL"
signature: "void readSQL (SQLInput stream, String typeName) throws SQLException"
title: "SQLData.readSQL"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLData.readSQL

```java
void readSQL (SQLInput stream, String typeName) throws SQLException
```

Populates this object with data read from the database.
 The implementation of the method must follow this protocol:
 
 
- It must read each of the attributes or elements of the SQL
 type  from the given input stream.  This is done
 by calling a method of the input stream to read each
 item, in the order that they appear in the SQL definition
 of the type.
 
- The method `readSQL` then
 assigns the data to appropriate fields or
 elements (of this or other objects).
 Specifically, it must call the appropriate reader method
 (`SQLInput.readString`, `SQLInput.readBigDecimal`,
 and so on) method(s) to do the following:
 for a distinct type, read its single data element;
 for a structured type, read a value for each attribute of the SQL type.
 

 The JDBC driver initializes the input stream with a type map
 before calling this method, which is used by the appropriate
 `SQLInput` reader method on the stream.

**参数**

- **stream** — the `SQLInput` object from which to read the data for the value that is being custom mapped
- **typeName** — the SQL type name of the value on the data stream

**异常**

- **SQLException** — if there is a database access error
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

**参见**

- SQLInput

> *Since 1.2*
