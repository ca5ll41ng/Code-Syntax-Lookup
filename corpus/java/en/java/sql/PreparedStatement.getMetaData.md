---
id: "java-en-function-preparedstatement-getmetadata"
language: "java"
lang: "en"
category: "function"
name: "PreparedStatement.getMetaData"
signature: "ResultSetMetaData getMetaData() throws SQLException"
title: "PreparedStatement.getMetaData"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/PreparedStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PreparedStatement.getMetaData

```java
ResultSetMetaData getMetaData() throws SQLException
```

Retrieves a `ResultSetMetaData` object that contains
 information about the columns of the `ResultSet` object
 that will be returned when this `PreparedStatement` object
 is executed.
 

 Because a `PreparedStatement` object is precompiled, it is
 possible to know about the `ResultSet` object that it will
 return without having to execute it.  Consequently, it is possible
 to invoke the method `getMetaData` on a
 `PreparedStatement` object rather than waiting to execute
 it and then invoking the `ResultSet.getMetaData` method
 on the `ResultSet` object that is returned.
 

 **NOTE:** Using this method may be expensive for some drivers due
 to the lack of underlying DBMS support.

**返回**

- the description of a `ResultSet` object's columns or `null` if the driver cannot return a `ResultSetMetaData` object

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed `PreparedStatement`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
