---
id: "java-en-function-rowsetmetadata-setprecision"
language: "java"
lang: "en"
category: "function"
name: "RowSetMetaData.setPrecision"
signature: "void setPrecision(int columnIndex, int precision) throws SQLException"
title: "RowSetMetaData.setPrecision"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSetMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSetMetaData.setPrecision

```java
void setPrecision(int columnIndex, int precision) throws SQLException
```

Sets the designated column's number of decimal digits to the
 given `int`.

**参数**

- **columnIndex** — the first column is 1, the second is 2, ...
- **precision** — the total number of decimal digits

**异常**

- **SQLException** — if a database access error occurs
