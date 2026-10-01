---
id: "java-en-function-rowsetmetadata-setcolumntype"
language: "java"
lang: "en"
category: "function"
name: "RowSetMetaData.setColumnType"
signature: "void setColumnType(int columnIndex, int SQLType) throws SQLException"
title: "RowSetMetaData.setColumnType"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSetMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSetMetaData.setColumnType

```java
void setColumnType(int columnIndex, int SQLType) throws SQLException
```

Sets the designated column's SQL type to the one given.

**参数**

- **columnIndex** — the first column is 1, the second is 2, ...
- **SQLType** — the column's SQL type

**异常**

- **SQLException** — if a database access error occurs

**参见**

- Types
