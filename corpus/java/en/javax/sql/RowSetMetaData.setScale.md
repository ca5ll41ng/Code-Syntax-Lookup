---
id: "java-en-function-rowsetmetadata-setscale"
language: "java"
lang: "en"
category: "function"
name: "RowSetMetaData.setScale"
signature: "void setScale(int columnIndex, int scale) throws SQLException"
title: "RowSetMetaData.setScale"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSetMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSetMetaData.setScale

```java
void setScale(int columnIndex, int scale) throws SQLException
```

Sets the designated column's number of digits to the
 right of the decimal point to the given `int`.

**参数**

- **columnIndex** — the first column is 1, the second is 2, ...
- **scale** — the number of digits to right of decimal point

**异常**

- **SQLException** — if a database access error occurs
