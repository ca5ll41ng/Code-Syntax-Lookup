---
id: "java-en-function-rowsetmetadata-setcolumntypename"
language: "java"
lang: "en"
category: "function"
name: "RowSetMetaData.setColumnTypeName"
signature: "void setColumnTypeName(int columnIndex, String typeName) throws SQLException"
title: "RowSetMetaData.setColumnTypeName"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSetMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSetMetaData.setColumnTypeName

```java
void setColumnTypeName(int columnIndex, String typeName) throws SQLException
```

Sets the designated column's type name that is specific to the
 data source, if any, to the given `String`.

**参数**

- **columnIndex** — the first column is 1, the second is 2, ...
- **typeName** — data source specific type name.

**异常**

- **SQLException** — if a database access error occurs
