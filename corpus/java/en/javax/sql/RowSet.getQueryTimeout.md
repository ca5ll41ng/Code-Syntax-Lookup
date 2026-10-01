---
id: "java-en-function-rowset-getquerytimeout"
language: "java"
lang: "en"
category: "function"
name: "RowSet.getQueryTimeout"
signature: "int getQueryTimeout() throws SQLException"
title: "RowSet.getQueryTimeout"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.getQueryTimeout

```java
int getQueryTimeout() throws SQLException
```

Retrieves the maximum number of seconds the driver will wait for
 a statement to execute.
 If this limit is exceeded, an `SQLException` is thrown.

**返回**

- the current query timeout limit in seconds; zero means unlimited

**异常**

- **SQLException** — if a database access error occurs

**参见**

- #setQueryTimeout
