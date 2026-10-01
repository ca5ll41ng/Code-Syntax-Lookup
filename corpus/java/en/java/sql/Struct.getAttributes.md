---
id: "java-en-function-struct-getattributes"
language: "java"
lang: "en"
category: "function"
name: "Struct.getAttributes"
signature: "Object[] getAttributes() throws SQLException"
title: "Struct.getAttributes"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Struct.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Struct.getAttributes

```java
Object[] getAttributes() throws SQLException
```

Produces the ordered values of the attributes of the SQL
 structured type that this `Struct` object represents.
 As individual attributes are processed, this method uses the type map
 associated with the
 connection for customizations of the type mappings.
 If there is no
 entry in the connection's type map that matches the structured
 type that an attribute represents,
 the driver uses the standard mapping.
 

 Conceptually, this method calls the method
 `getObject` on each attribute
 of the structured type and returns a Java array containing
 the result.

**返回**

- an array containing the ordered attribute values

**异常**

- **SQLException** — if a database access error occurs
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
