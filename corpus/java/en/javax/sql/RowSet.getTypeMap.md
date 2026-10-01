---
id: "java-en-function-rowset-gettypemap"
language: "java"
lang: "en"
category: "function"
name: "RowSet.getTypeMap"
signature: "java.util.Map<String,Class<?>> getTypeMap() throws SQLException"
title: "RowSet.getTypeMap"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.getTypeMap

```java
java.util.Map<String,Class<?>> getTypeMap() throws SQLException
```

Retrieves the `Map` object associated with this
 `RowSet` object, which specifies the custom mapping
 of SQL user-defined types, if any.  The default is for the
 type map to be empty.

**返回**

- a `java.util.Map` object containing the names of SQL user-defined types and the Java classes to which they are to be mapped

**异常**

- **SQLException** — if a database access error occurs

**参见**

- #setTypeMap
