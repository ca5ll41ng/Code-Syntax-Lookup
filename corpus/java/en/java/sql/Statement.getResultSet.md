---
id: "java-en-function-statement-getresultset"
language: "java"
lang: "en"
category: "function"
name: "Statement.getResultSet"
signature: "ResultSet getResultSet() throws SQLException"
title: "Statement.getResultSet"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Statement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Statement.getResultSet

```java
ResultSet getResultSet() throws SQLException
```

Retrieves the current result as a `ResultSet` object.
  This method should be called only once per result.

**返回**

- the current result as a `ResultSet` object or `null` if the result is an update count or there are no more results

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed `Statement`

**参见**

- #execute
