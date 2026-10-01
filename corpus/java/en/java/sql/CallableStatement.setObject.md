---
id: "java-en-function-callablestatement-setobject"
language: "java"
lang: "en"
category: "function"
name: "CallableStatement.setObject"
signature: "void setObject(String parameterName, Object x, int targetSqlType, int scale) throws SQLException"
title: "CallableStatement.setObject"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/CallableStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CallableStatement.setObject

```java
void setObject(String parameterName, Object x, int targetSqlType, int scale) throws SQLException
```

Sets the value of the designated parameter with the given object.

 

The given Java object will be converted to the given targetSqlType
 before being sent to the database.

 If the object has a custom mapping (is of a class implementing the
 interface `SQLData`),
 the JDBC driver should call the method `SQLData.writeSQL` to write it
 to the SQL data stream.
 If, on the other hand, the object is of a class implementing
 `Ref`, `Blob`, `Clob`,  `NClob`,
  `Struct`, `java.net.URL`,
 or `Array`, the driver should pass it to the database as a
 value of the corresponding SQL type.
 

 Note that this method may be used to pass datatabase-
 specific abstract data types.

**参数**

- **parameterName** — the name of the parameter
- **x** — the object containing the input parameter value
- **targetSqlType** — the SQL type (as defined in java.sql.Types) to be sent to the database. The scale argument may further qualify this type.
- **scale** — for java.sql.Types.DECIMAL or java.sql.Types.NUMERIC types, this is the number of digits after the decimal point.  For all other types, this value will be ignored.

**异常**

- **SQLException** — if parameterName does not correspond to a named parameter; if a database access error occurs or this method is called on a closed `CallableStatement`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support the specified targetSqlType

**参见**

- Types
- #getObject

> *Since 1.4*
