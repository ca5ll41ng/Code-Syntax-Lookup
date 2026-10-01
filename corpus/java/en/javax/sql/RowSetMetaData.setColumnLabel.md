---
id: "java-en-function-rowsetmetadata-setcolumnlabel"
language: "java"
lang: "en"
category: "function"
name: "RowSetMetaData.setColumnLabel"
signature: "void setColumnLabel(int columnIndex, String label) throws SQLException"
title: "RowSetMetaData.setColumnLabel"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSetMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSetMetaData.setColumnLabel

```java
void setColumnLabel(int columnIndex, String label) throws SQLException
```

Sets the suggested column title for use in printouts and
 displays, if any, to the given `String`.

**参数**

- **columnIndex** — the first column is 1, the second is 2, ...
- **label** — the column title

**异常**

- **SQLException** — if a database access error occurs
