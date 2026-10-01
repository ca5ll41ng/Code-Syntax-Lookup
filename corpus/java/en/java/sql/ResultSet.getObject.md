---
id: "java-en-function-resultset-getobject"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.getObject"
signature: "Object getObject(int columnIndex) throws SQLException"
title: "ResultSet.getObject"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.getObject

```java
Object getObject(int columnIndex) throws SQLException
```

Gets the value of the designated column in the current row
 of this `ResultSet` object as
 an `Object` in the Java programming language.

 

This method will return the value of the given column as a
 Java object.  The type of the Java object will be the default
 Java object type corresponding to the column's SQL type,
 following the mapping for built-in types specified in the JDBC
 specification. If the value is an SQL `NULL`,
 the driver returns a Java `null`.

 

This method may also be used to read database-specific
 abstract data types.

 In the JDBC 2.0 API, the behavior of method
 `getObject` is extended to materialize
 data of SQL user-defined types.
 

 If `Connection.getTypeMap` does not throw a
 `SQLFeatureNotSupportedException`,
 then when a column contains a structured or distinct value,
 the behavior of this method is as
 if it were a call to: `getObject(columnIndex,
 this.getStatement().getConnection().getTypeMap())`.

 If `Connection.getTypeMap` does throw a
 `SQLFeatureNotSupportedException`,
 then structured values are not supported, and distinct values
 are mapped to the default Java class as determined by the
 underlying SQL type of the DISTINCT type.

**参数**

- **columnIndex** — the first column is 1, the second is 2, ...

**返回**

- a `java.lang.Object` holding the column value

**异常**

- **SQLException** — if the columnIndex is not valid; if a database access error occurs or this method is called on a closed result set
