---
id: "java-en-function-rowset-setobject"
language: "java"
lang: "en"
category: "function"
name: "RowSet.setObject"
signature: "void setObject(int parameterIndex, Object x, int targetSqlType, int scaleOrLength) throws SQLException"
title: "RowSet.setObject"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.setObject

```java
void setObject(int parameterIndex, Object x, int targetSqlType, int scaleOrLength) throws SQLException
```

Sets the designated parameter in this `RowSet` object's command
 with the given Java `Object`.  For integral values, the
 `java.lang` equivalent objects should be used (for example,
 an instance of the class `Integer` for an `int`).

 If the second argument is an `InputStream` then the stream must contain
 the number of bytes specified by scaleOrLength.  If the second argument is a
 `Reader` then the `Reader` must contain the number of characters specified
 by scaleOrLength. If these conditions are not true the driver will generate a
 `SQLException` when the prepared statement is executed.

 

The given Java object will be converted to the targetSqlType
 before being sent to the database.
 

 If the object is of a class implementing `SQLData`,
 the rowset should call the method `SQLData.writeSQL`
 to write the object to an `SQLOutput` data stream.
 If, on the other hand, the object is of a class implementing
 `Ref`, `Blob`, `Clob`,  `NClob`,
  `Struct`, `java.net.URL`,
 or `Array`, the driver should pass it to the database as a
 value of the corresponding SQL type.

 

Note that this method may be used to pass database-specific
 abstract data types.

**参数**

- **parameterIndex** — the first parameter is 1, the second is 2, ...
- **x** — the object containing the input parameter value
- **targetSqlType** — the SQL type (as defined in `java.sql.Types`) to be sent to the database. The scale argument may further qualify this type.
- **scaleOrLength** — for `java.sql.Types.DECIMAL` or `java.sql.Types.NUMERIC types`, this is the number of digits after the decimal point. For Java Object types `InputStream` and `Reader`, this is the length of the data in the stream or `Reader`.  For all other types, this value will be ignored.

**异常**

- **SQLException** — if a database access error occurs

**参见**

- java.sql.Types
