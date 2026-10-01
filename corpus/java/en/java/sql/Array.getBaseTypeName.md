---
id: "java-en-function-array-getbasetypename"
language: "java"
lang: "en"
category: "function"
name: "Array.getBaseTypeName"
signature: "String getBaseTypeName() throws SQLException"
title: "Array.getBaseTypeName"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Array.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Array.getBaseTypeName

```java
String getBaseTypeName() throws SQLException
```

Retrieves the SQL type name of the elements in
 the array designated by this `Array` object.
 If the elements are a built-in type, it returns
 the database-specific type name of the elements.
 If the elements are a user-defined type (UDT),
 this method returns the fully-qualified SQL type name.

**返回**

- a `String` that is the database-specific name for a built-in base type; or the fully-qualified SQL type name for a base type that is a UDT

**异常**

- **SQLException** — if an error occurs while attempting to access the type name
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
