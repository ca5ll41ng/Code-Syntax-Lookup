---
id: "java-en-function-resultset-first"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.first"
signature: "boolean first() throws SQLException"
title: "ResultSet.first"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.first

```java
boolean first() throws SQLException
```

Moves the cursor to the first row in
 this `ResultSet` object.

**返回**

- `true` if the cursor is on a valid row; `false` if there are no rows in the result set

**异常**

- **SQLException** — if a database access error occurs; this method is called on a closed result set or the result set type is `TYPE_FORWARD_ONLY`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
