---
id: "java-en-function-rowsetinternal-getparams"
language: "java"
lang: "en"
category: "function"
name: "RowSetInternal.getParams"
signature: "Object[] getParams() throws SQLException"
title: "RowSetInternal.getParams"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSetInternal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSetInternal.getParams

```java
Object[] getParams() throws SQLException
```

Retrieves the parameters that have been set for this
 `RowSet` object's command.

**返回**

- an array of the current parameter values for this `RowSet` object's command

**异常**

- **SQLException** — if a database access error occurs
