---
id: "java-en-function-resultset-getfetchsize"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.getFetchSize"
signature: "int getFetchSize() throws SQLException"
title: "ResultSet.getFetchSize"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.getFetchSize

```java
int getFetchSize() throws SQLException
```

Retrieves the fetch size for this
 `ResultSet` object.

**返回**

- the current fetch size for this `ResultSet` object

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed result set

**参见**

- #setFetchSize

> *Since 1.2*
