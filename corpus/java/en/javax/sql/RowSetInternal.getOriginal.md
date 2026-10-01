---
id: "java-en-function-rowsetinternal-getoriginal"
language: "java"
lang: "en"
category: "function"
name: "RowSetInternal.getOriginal"
signature: "public ResultSet getOriginal() throws SQLException"
title: "RowSetInternal.getOriginal"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSetInternal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSetInternal.getOriginal

```java
public ResultSet getOriginal() throws SQLException
```

Retrieves a `ResultSet` object containing the original
 value of this `RowSet` object.
 

 The cursor is positioned before the first row in the result set.
 Only rows contained in the result set returned by the method
 `getOriginal` are said to have an original value.

**返回**

- the original value of the rowset

**异常**

- **SQLException** — if a database access error occurs
