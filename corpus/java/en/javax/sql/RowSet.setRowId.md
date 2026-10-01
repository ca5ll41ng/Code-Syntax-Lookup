---
id: "java-en-function-rowset-setrowid"
language: "java"
lang: "en"
category: "function"
name: "RowSet.setRowId"
signature: "void setRowId(int parameterIndex, RowId x) throws SQLException"
title: "RowSet.setRowId"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.setRowId

```java
void setRowId(int parameterIndex, RowId x) throws SQLException
```

Sets the designated parameter to the given `java.sql.RowId` object. The
 driver converts this to a SQL `ROWID` value when it sends it
 to the database

**参数**

- **parameterIndex** — the first parameter is 1, the second is 2, ...
- **x** — the parameter value

**异常**

- **SQLException** — if a database access error occurs

> *Since 1.6*
