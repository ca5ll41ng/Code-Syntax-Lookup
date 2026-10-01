---
id: "java-en-function-rowsetinternal-getconnection"
language: "java"
lang: "en"
category: "function"
name: "RowSetInternal.getConnection"
signature: "Connection getConnection() throws SQLException"
title: "RowSetInternal.getConnection"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSetInternal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSetInternal.getConnection

```java
Connection getConnection() throws SQLException
```

Retrieves the `Connection` object that was passed to this
 `RowSet` object.

**返回**

- the `Connection` object passed to the rowset or `null` if none was passed

**异常**

- **SQLException** — if a database access error occurs
