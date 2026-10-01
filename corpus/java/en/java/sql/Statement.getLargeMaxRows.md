---
id: "java-en-function-statement-getlargemaxrows"
language: "java"
lang: "en"
category: "function"
name: "Statement.getLargeMaxRows"
signature: "default long getLargeMaxRows() throws SQLException"
title: "Statement.getLargeMaxRows"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Statement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Statement.getLargeMaxRows

```java
default long getLargeMaxRows() throws SQLException
```

Retrieves the maximum number of rows that a
 `ResultSet` object produced by this
 `Statement` object can contain.  If this limit is exceeded,
 the excess rows are silently dropped.
 

 This method should be used when the returned row limit may exceed
 `MAX_VALUE`.

 The default implementation will return `0`

**返回**

- the current maximum number of rows for a `ResultSet` object produced by this `Statement` object; zero means there is no limit

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed `Statement`

**参见**

- #setMaxRows

> *Since 1.8*
