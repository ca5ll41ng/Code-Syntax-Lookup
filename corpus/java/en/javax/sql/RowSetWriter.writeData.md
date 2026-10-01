---
id: "java-en-function-rowsetwriter-writedata"
language: "java"
lang: "en"
category: "function"
name: "RowSetWriter.writeData"
signature: "boolean writeData(RowSetInternal caller) throws SQLException"
title: "RowSetWriter.writeData"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSetWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSetWriter.writeData

```java
boolean writeData(RowSetInternal caller) throws SQLException
```

Writes the changes in this `RowSetWriter` object's
 rowset back to the data source from which it got its data.

**参数**

- **caller** — the `RowSet` object (1) that has implemented the `RowSetInternal` interface, (2) with which this writer is registered, and (3) that called this method internally

**返回**

- `true` if the modified data was written; `false` if not, which will be the case if there is a conflict

**异常**

- **SQLException** — if a database access error occurs
