---
id: "java-en-function-statement-getlargeupdatecount"
language: "java"
lang: "en"
category: "function"
name: "Statement.getLargeUpdateCount"
signature: "default long getLargeUpdateCount() throws SQLException"
title: "Statement.getLargeUpdateCount"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Statement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Statement.getLargeUpdateCount

```java
default long getLargeUpdateCount() throws SQLException
```

Retrieves the current result as an update count; if the result
 is a `ResultSet` object or there are no more results, -1
  is returned. This method should be called only once per result.
 

 This method should be used when the returned row count may exceed
 `MAX_VALUE`.

 The default implementation will throw `UnsupportedOperationException`

**返回**

- the current result as an update count; -1 if the current result is a `ResultSet` object or there are no more results

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed `Statement`

**参见**

- #execute

> *Since 1.8*
