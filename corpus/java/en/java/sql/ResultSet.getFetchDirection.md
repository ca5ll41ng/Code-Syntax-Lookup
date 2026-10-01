---
id: "java-en-function-resultset-getfetchdirection"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.getFetchDirection"
signature: "int getFetchDirection() throws SQLException"
title: "ResultSet.getFetchDirection"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.getFetchDirection

```java
int getFetchDirection() throws SQLException
```

Retrieves the fetch direction for this
 `ResultSet` object.

**返回**

- the current fetch direction for this `ResultSet` object

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed result set

**参见**

- #setFetchDirection

> *Since 1.2*
