---
id: "java-en-function-rowset-setconcurrency"
language: "java"
lang: "en"
category: "function"
name: "RowSet.setConcurrency"
signature: "void setConcurrency(int concurrency) throws SQLException"
title: "RowSet.setConcurrency"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.setConcurrency

```java
void setConcurrency(int concurrency) throws SQLException
```

Sets the concurrency of this `RowSet` object to the given
 concurrency level. This method is used to change the concurrency level
 of a rowset, which is by default `ResultSet.CONCUR_READ_ONLY`

**参数**

- **concurrency** — one of the `ResultSet` constants specifying a concurrency level:  `ResultSet.CONCUR_READ_ONLY` or `ResultSet.CONCUR_UPDATABLE`

**异常**

- **SQLException** — if a database access error occurs

**参见**

- ResultSet#getConcurrency
