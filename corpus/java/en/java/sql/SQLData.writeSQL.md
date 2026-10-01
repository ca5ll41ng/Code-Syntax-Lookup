---
id: "java-en-function-sqldata-writesql"
language: "java"
lang: "en"
category: "function"
name: "SQLData.writeSQL"
signature: "void writeSQL (SQLOutput stream) throws SQLException"
title: "SQLData.writeSQL"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLData.writeSQL

```java
void writeSQL (SQLOutput stream) throws SQLException
```

Writes this object to the given SQL data stream, converting it back to
 its SQL value in the data source.
 The implementation of the method must follow this protocol:

 It must write each of the attributes of the SQL type
 to the given output stream.  This is done by calling a
 method of the output stream to write each item, in the order that
 they appear in the SQL definition of the type.
 Specifically, it must call the appropriate `SQLOutput` writer
 method(s) (`writeInt`, `writeString`, and so on)
 to do the following: for a Distinct Type, write its single data element;
 for a Structured Type, write a value for each attribute of the SQL type.

**参数**

- **stream** — the `SQLOutput` object to which to write the data for the value that was custom mapped

**异常**

- **SQLException** — if there is a database access error
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

**参见**

- SQLOutput

> *Since 1.2*
