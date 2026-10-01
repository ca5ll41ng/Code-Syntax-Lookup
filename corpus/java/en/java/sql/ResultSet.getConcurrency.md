---
id: "java-en-function-resultset-getconcurrency"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.getConcurrency"
signature: "int getConcurrency() throws SQLException"
title: "ResultSet.getConcurrency"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.getConcurrency

```java
int getConcurrency() throws SQLException
```

Retrieves the concurrency mode of this `ResultSet` object.
 The concurrency used is determined by the
 `Statement` object that created the result set.

**返回**

- the concurrency type, either `ResultSet.CONCUR_READ_ONLY` or `ResultSet.CONCUR_UPDATABLE`

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed result set

> *Since 1.2*
