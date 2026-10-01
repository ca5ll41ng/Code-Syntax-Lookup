---
id: "java-en-function-rowsetmetadata-setcatalogname"
language: "java"
lang: "en"
category: "function"
name: "RowSetMetaData.setCatalogName"
signature: "void setCatalogName(int columnIndex, String catalogName) throws SQLException"
title: "RowSetMetaData.setCatalogName"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSetMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSetMetaData.setCatalogName

```java
void setCatalogName(int columnIndex, String catalogName) throws SQLException
```

Sets the designated column's table's catalog name, if any, to the given
 `String`.

**参数**

- **columnIndex** — the first column is 1, the second is 2, ...
- **catalogName** — the column's catalog name

**异常**

- **SQLException** — if a database access error occurs
