---
id: "java-en-function-resultset-gettype"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.getType"
signature: "int getType() throws SQLException"
title: "ResultSet.getType"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.getType

```java
int getType() throws SQLException
```

Retrieves the type of this `ResultSet` object.
 The type is determined by the `Statement` object
 that created the result set.

**返回**

- `ResultSet.TYPE_FORWARD_ONLY`, `ResultSet.TYPE_SCROLL_INSENSITIVE`, or `ResultSet.TYPE_SCROLL_SENSITIVE`

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed result set

> *Since 1.2*
