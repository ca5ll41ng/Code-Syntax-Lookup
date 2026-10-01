---
id: "java-en-function-statement-getmaxrows"
language: "java"
lang: "en"
category: "function"
name: "Statement.getMaxRows"
signature: "int getMaxRows() throws SQLException"
title: "Statement.getMaxRows"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Statement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Statement.getMaxRows

```java
int getMaxRows() throws SQLException
```

Retrieves the maximum number of rows that a
 `ResultSet` object produced by this
 `Statement` object can contain.  If this limit is exceeded,
 the excess rows are silently dropped.

**返回**

- the current maximum number of rows for a `ResultSet` object produced by this `Statement` object; zero means there is no limit

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed `Statement`

**参见**

- #setMaxRows
