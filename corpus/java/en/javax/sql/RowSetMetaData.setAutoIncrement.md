---
id: "java-en-function-rowsetmetadata-setautoincrement"
language: "java"
lang: "en"
category: "function"
name: "RowSetMetaData.setAutoIncrement"
signature: "void setAutoIncrement(int columnIndex, boolean property) throws SQLException"
title: "RowSetMetaData.setAutoIncrement"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSetMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSetMetaData.setAutoIncrement

```java
void setAutoIncrement(int columnIndex, boolean property) throws SQLException
```

Sets whether the designated column is automatically numbered,
 The default is for a `RowSet` object's
 columns not to be automatically numbered.

**参数**

- **columnIndex** — the first column is 1, the second is 2, ...
- **property** — `true` if the column is automatically numbered; `false` if it is not

**异常**

- **SQLException** — if a database access error occurs
