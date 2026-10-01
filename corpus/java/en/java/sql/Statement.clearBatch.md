---
id: "java-en-function-statement-clearbatch"
language: "java"
lang: "en"
category: "function"
name: "Statement.clearBatch"
signature: "void clearBatch() throws SQLException"
title: "Statement.clearBatch"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Statement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Statement.clearBatch

```java
void clearBatch() throws SQLException
```

Empties this `Statement` object's current list of
 SQL commands.

**异常**

- **SQLException** — if a database access error occurs, this method is called on a closed `Statement` or the driver does not support batch updates

**参见**

- #addBatch
- DatabaseMetaData#supportsBatchUpdates

> *Since 1.2*
