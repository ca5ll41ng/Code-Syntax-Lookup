---
id: "java-en-function-resultset-getholdability"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.getHoldability"
signature: "int getHoldability() throws SQLException"
title: "ResultSet.getHoldability"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.getHoldability

```java
int getHoldability() throws SQLException
```

Retrieves the holdability of this `ResultSet` object

**返回**

- either `ResultSet.HOLD_CURSORS_OVER_COMMIT` or `ResultSet.CLOSE_CURSORS_AT_COMMIT`

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed result set

> *Since 1.6*
