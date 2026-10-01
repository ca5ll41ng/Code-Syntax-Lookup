---
id: "java-en-function-rowsetmetadata-setcolumnname"
language: "java"
lang: "en"
category: "function"
name: "RowSetMetaData.setColumnName"
signature: "void setColumnName(int columnIndex, String columnName) throws SQLException"
title: "RowSetMetaData.setColumnName"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSetMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSetMetaData.setColumnName

```java
void setColumnName(int columnIndex, String columnName) throws SQLException
```

Sets the name of the designated column to the given `String`.

**参数**

- **columnIndex** — the first column is 1, the second is 2, ...
- **columnName** — the designated column's name

**异常**

- **SQLException** — if a database access error occurs
