---
id: "java-en-function-array-getarray"
language: "java"
lang: "en"
category: "function"
name: "Array.getArray"
signature: "Object getArray() throws SQLException"
title: "Array.getArray"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Array.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Array.getArray

```java
Object getArray() throws SQLException
```

Retrieves the contents of the SQL `ARRAY` value designated
 by this
 `Array` object in the form of an array in the Java
 programming language. This version of the method `getArray`
 uses the type map associated with the connection for customizations of
 the type mappings.
 

 **Note:** When `getArray` is used to materialize
 a base type that maps to a primitive data type, then it is
 implementation-defined whether the array returned is an array of
 that primitive data type or an array of `Object`.

**返回**

- an array in the Java programming language that contains the ordered elements of the SQL `ARRAY` value designated by this `Array` object

**异常**

- **SQLException** — if an error occurs while attempting to access the array
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
