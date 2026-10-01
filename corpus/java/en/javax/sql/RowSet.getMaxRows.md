---
id: "java-en-function-rowset-getmaxrows"
language: "java"
lang: "en"
category: "function"
name: "RowSet.getMaxRows"
signature: "int getMaxRows() throws SQLException"
title: "RowSet.getMaxRows"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.getMaxRows

```java
int getMaxRows() throws SQLException
```

Retrieves the maximum number of rows that this `RowSet`
 object can contain.
 If the limit is exceeded, the excess rows are silently dropped.

**返回**

- the current maximum number of rows that this `RowSet` object can contain; zero means unlimited

**异常**

- **SQLException** — if a database access error occurs

**参见**

- #setMaxRows
