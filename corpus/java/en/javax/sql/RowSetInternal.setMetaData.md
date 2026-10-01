---
id: "java-en-function-rowsetinternal-setmetadata"
language: "java"
lang: "en"
category: "function"
name: "RowSetInternal.setMetaData"
signature: "void setMetaData(RowSetMetaData md) throws SQLException"
title: "RowSetInternal.setMetaData"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSetInternal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSetInternal.setMetaData

```java
void setMetaData(RowSetMetaData md) throws SQLException
```

Sets the given `RowSetMetaData` object as the
 `RowSetMetaData` object for this `RowSet`
 object. The `RowSetReader` object associated with the rowset
 will use `RowSetMetaData` methods to set the values giving
 information about the rowset's columns.

**参数**

- **md** — the `RowSetMetaData` object that will be set with information about the rowset's columns

**异常**

- **SQLException** — if a database access error occurs
