---
id: "java-en-function-connection-createarrayof"
language: "java"
lang: "en"
category: "function"
name: "Connection.createArrayOf"
signature: "Array createArrayOf(String typeName, Object[] elements) throws SQLException"
title: "Connection.createArrayOf"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.createArrayOf

```java
Array createArrayOf(String typeName, Object[] elements) throws SQLException
```

Factory method for creating Array objects.
 

 **Note: **When `createArrayOf` is used to create an array object
 that maps to a primitive data type, then it is implementation-defined
 whether the `Array` object is an array of that primitive
 data type or an array of `Object`.
 

 **Note: **The JDBC driver is responsible for mapping the elements
 `Object` array to the default JDBC SQL type defined in
 java.sql.Types for the given class of `Object`. The default
 mapping is specified in Appendix B of the JDBC specification.  If the
 resulting JDBC type is not the appropriate type for the given typeName then
 it is implementation defined whether an `SQLException` is
 thrown or the driver supports the resulting conversion.

**参数**

- **typeName** — the SQL name of the type the elements of the array map to. The typeName is a database-specific name which may be the name of a built-in type, a user-defined type or a standard  SQL type supported by this database. This is the value returned by `Array.getBaseTypeName`
- **elements** — the elements that populate the returned object

**返回**

- an Array object whose elements map to the specified SQL type

**异常**

- **SQLException** — if a database error occurs, the JDBC type is not appropriate for the typeName and the conversion is not supported, the typeName is null or this method is called on a closed connection
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this data type

> *Since 1.6*
