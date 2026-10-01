---
id: "java-en-function-rowset-settypemap"
language: "java"
lang: "en"
category: "function"
name: "RowSet.setTypeMap"
signature: "void setTypeMap(java.util.Map<String,Class<?>> map) throws SQLException"
title: "RowSet.setTypeMap"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.setTypeMap

```java
void setTypeMap(java.util.Map<String,Class<?>> map) throws SQLException
```

Installs the given `java.util.Map` object as the default
 type map for this `RowSet` object. This type map will be
 used unless another type map is supplied as a method parameter.

**参数**

- **map** — a `java.util.Map` object containing the names of SQL user-defined types and the Java classes to which they are to be mapped

**异常**

- **SQLException** — if a database access error occurs

**参见**

- #getTypeMap
