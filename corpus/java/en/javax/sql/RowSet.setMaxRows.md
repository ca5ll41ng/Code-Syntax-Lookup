---
id: "java-en-function-rowset-setmaxrows"
language: "java"
lang: "en"
category: "function"
name: "RowSet.setMaxRows"
signature: "void setMaxRows(int max) throws SQLException"
title: "RowSet.setMaxRows"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.setMaxRows

```java
void setMaxRows(int max) throws SQLException
```

Sets the maximum number of rows that this `RowSet`
 object can contain to the specified number.
 If the limit is exceeded, the excess rows are silently dropped.

**参数**

- **max** — the new maximum number of rows; zero means unlimited

**异常**

- **SQLException** — if a database access error occurs

**参见**

- #getMaxRows
