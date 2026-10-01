---
id: "java-en-function-rowsetinternal-getoriginalrow"
language: "java"
lang: "en"
category: "function"
name: "RowSetInternal.getOriginalRow"
signature: "public ResultSet getOriginalRow() throws SQLException"
title: "RowSetInternal.getOriginalRow"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSetInternal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSetInternal.getOriginalRow

```java
public ResultSet getOriginalRow() throws SQLException
```

Retrieves a `ResultSet` object containing the original value
 of the current row only.  If the current row has no original value,
 an empty result set is returned. If there is no current row,
 an exception is thrown.

**返回**

- the original value of the current row as a `ResultSet` object

**异常**

- **SQLException** — if a database access error occurs or this method is called while the cursor is on the insert row, before the first row, or after the last row
