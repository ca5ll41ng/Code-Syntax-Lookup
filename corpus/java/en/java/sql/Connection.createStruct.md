---
id: "java-en-function-connection-createstruct"
language: "java"
lang: "en"
category: "function"
name: "Connection.createStruct"
signature: "Struct createStruct(String typeName, Object[] attributes) throws SQLException"
title: "Connection.createStruct"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.createStruct

```java
Struct createStruct(String typeName, Object[] attributes) throws SQLException
```

Factory method for creating Struct objects.

**参数**

- **typeName** — the SQL type name of the SQL structured type that this `Struct` object maps to. The typeName is the name of  a user-defined type that has been defined for this database. It is the value returned by `Struct.getSQLTypeName`.
- **attributes** — the attributes that populate the returned object

**返回**

- a Struct object that maps to the given SQL type and is populated with the given attributes

**异常**

- **SQLException** — if a database error occurs, the typeName is null or this method is called on a closed connection
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this data type

> *Since 1.6*
