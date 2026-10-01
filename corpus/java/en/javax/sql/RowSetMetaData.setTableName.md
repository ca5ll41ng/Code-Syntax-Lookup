---
id: "java-en-function-rowsetmetadata-settablename"
language: "java"
lang: "en"
category: "function"
name: "RowSetMetaData.setTableName"
signature: "void setTableName(int columnIndex, String tableName) throws SQLException"
title: "RowSetMetaData.setTableName"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSetMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSetMetaData.setTableName

```java
void setTableName(int columnIndex, String tableName) throws SQLException
```

Sets the designated column's table name, if any, to the given
 `String`.

**参数**

- **columnIndex** — the first column is 1, the second is 2, ...
- **tableName** — the column's table name

**异常**

- **SQLException** — if a database access error occurs
