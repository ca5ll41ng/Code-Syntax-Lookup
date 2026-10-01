---
id: "java-en-function-rowsetmetadata-setsearchable"
language: "java"
lang: "en"
category: "function"
name: "RowSetMetaData.setSearchable"
signature: "void setSearchable(int columnIndex, boolean property) throws SQLException"
title: "RowSetMetaData.setSearchable"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSetMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSetMetaData.setSearchable

```java
void setSearchable(int columnIndex, boolean property) throws SQLException
```

Sets whether the designated column can be used in a where clause.
 The default is `false`.

**参数**

- **columnIndex** — the first column is 1, the second is 2, ...
- **property** — `true` if the column can be used in a `WHERE` clause; `false` if it cannot

**异常**

- **SQLException** — if a database access error occurs
