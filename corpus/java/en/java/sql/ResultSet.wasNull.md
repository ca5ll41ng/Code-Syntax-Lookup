---
id: "java-en-function-resultset-wasnull"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.wasNull"
signature: "boolean wasNull() throws SQLException"
title: "ResultSet.wasNull"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.wasNull

```java
boolean wasNull() throws SQLException
```

Reports whether
 the last column read had a value of SQL `NULL`.
 Note that you must first call one of the getter methods
 on a column to try to read its value and then call
 the method `wasNull` to see if the value read was
 SQL `NULL`.

**返回**

- `true` if the last column value read was SQL `NULL` and `false` otherwise

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed result set
