---
id: "java-en-function-rowsetmetadata-setnullable"
language: "java"
lang: "en"
category: "function"
name: "RowSetMetaData.setNullable"
signature: "void setNullable(int columnIndex, int property) throws SQLException"
title: "RowSetMetaData.setNullable"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSetMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSetMetaData.setNullable

```java
void setNullable(int columnIndex, int property) throws SQLException
```

Sets whether the designated column's value can be set to
 `NULL`.
 The default is `ResultSetMetaData.columnNullableUnknown`

**参数**

- **columnIndex** — the first column is 1, the second is 2, ...
- **property** — one of the following constants: `ResultSetMetaData.columnNoNulls`, `ResultSetMetaData.columnNullable`, or `ResultSetMetaData.columnNullableUnknown`

**异常**

- **SQLException** — if a database access error occurs
