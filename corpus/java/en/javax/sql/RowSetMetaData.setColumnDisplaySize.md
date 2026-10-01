---
id: "java-en-function-rowsetmetadata-setcolumndisplaysize"
language: "java"
lang: "en"
category: "function"
name: "RowSetMetaData.setColumnDisplaySize"
signature: "void setColumnDisplaySize(int columnIndex, int size) throws SQLException"
title: "RowSetMetaData.setColumnDisplaySize"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSetMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSetMetaData.setColumnDisplaySize

```java
void setColumnDisplaySize(int columnIndex, int size) throws SQLException
```

Sets the designated column's normal maximum width in chars to the
 given `int`.

**参数**

- **columnIndex** — the first column is 1, the second is 2, ...
- **size** — the normal maximum number of characters for the designated column

**异常**

- **SQLException** — if a database access error occurs
