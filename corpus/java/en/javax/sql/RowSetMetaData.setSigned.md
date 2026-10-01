---
id: "java-en-function-rowsetmetadata-setsigned"
language: "java"
lang: "en"
category: "function"
name: "RowSetMetaData.setSigned"
signature: "void setSigned(int columnIndex, boolean property) throws SQLException"
title: "RowSetMetaData.setSigned"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSetMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSetMetaData.setSigned

```java
void setSigned(int columnIndex, boolean property) throws SQLException
```

Sets whether the designated column is a signed number.
 The default is `false`.

**参数**

- **columnIndex** — the first column is 1, the second is 2, ...
- **property** — `true` if the column is a signed number; `false` if it is not

**异常**

- **SQLException** — if a database access error occurs
