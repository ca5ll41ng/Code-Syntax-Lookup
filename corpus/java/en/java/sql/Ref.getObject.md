---
id: "java-en-function-ref-getobject"
language: "java"
lang: "en"
category: "function"
name: "Ref.getObject"
signature: "Object getObject(java.util.Map<String,Class<?>> map) throws SQLException"
title: "Ref.getObject"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Ref.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Ref.getObject

```java
Object getObject(java.util.Map<String,Class<?>> map) throws SQLException
```

Retrieves the referenced object and maps it to a Java type
 using the given type map.

**参数**

- **map** — a `java.util.Map` object that contains the mapping to use (the fully-qualified name of the SQL structured type being referenced and the class object for `SQLData` implementation to which the SQL structured type will be mapped)

**返回**

- a Java `Object` that is the custom mapping for the SQL structured type to which this `Ref` object refers

**异常**

- **SQLException** — if a database access error occurs
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

**参见**

- #setObject

> *Since 1.4*
