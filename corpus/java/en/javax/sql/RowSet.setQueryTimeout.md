---
id: "java-en-function-rowset-setquerytimeout"
language: "java"
lang: "en"
category: "function"
name: "RowSet.setQueryTimeout"
signature: "void setQueryTimeout(int seconds) throws SQLException"
title: "RowSet.setQueryTimeout"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.setQueryTimeout

```java
void setQueryTimeout(int seconds) throws SQLException
```

Sets the maximum time the driver will wait for
 a statement to execute to the given number of seconds.
 If this limit is exceeded, an `SQLException` is thrown.

**参数**

- **seconds** — the new query timeout limit in seconds; zero means that there is no limit

**异常**

- **SQLException** — if a database access error occurs

**参见**

- #getQueryTimeout
