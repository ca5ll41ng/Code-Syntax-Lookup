---
id: "java-en-function-resultset-afterlast"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.afterLast"
signature: "void afterLast() throws SQLException"
title: "ResultSet.afterLast"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.afterLast

```java
void afterLast() throws SQLException
```

Moves the cursor to the end of
 this `ResultSet` object, just after the
 last row. This method has no effect if the result set contains no rows.

**异常**

- **SQLException** — if a database access error occurs; this method is called on a closed result set or the result set type is `TYPE_FORWARD_ONLY`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
