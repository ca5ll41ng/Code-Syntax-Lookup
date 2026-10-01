---
id: "java-en-function-statement-getquerytimeout"
language: "java"
lang: "en"
category: "function"
name: "Statement.getQueryTimeout"
signature: "int getQueryTimeout() throws SQLException"
title: "Statement.getQueryTimeout"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Statement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Statement.getQueryTimeout

```java
int getQueryTimeout() throws SQLException
```

Retrieves the number of seconds the driver will
 wait for a `Statement` object to execute.
 If the limit is exceeded, a
 `SQLException` is thrown.

**返回**

- the current query timeout limit in seconds; zero means there is no limit

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed `Statement`

**参见**

- #setQueryTimeout
