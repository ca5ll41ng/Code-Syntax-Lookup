---
id: "java-en-function-resultset-beforefirst"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.beforeFirst"
signature: "void beforeFirst() throws SQLException"
title: "ResultSet.beforeFirst"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.beforeFirst

```java
void beforeFirst() throws SQLException
```

Moves the cursor to the front of
 this `ResultSet` object, just before the
 first row. This method has no effect if the result set contains no rows.

**异常**

- **SQLException** — if a database access error occurs; this method is called on a closed result set or the result set type is `TYPE_FORWARD_ONLY`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
