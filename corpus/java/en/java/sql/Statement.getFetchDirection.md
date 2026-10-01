---
id: "java-en-function-statement-getfetchdirection"
language: "java"
lang: "en"
category: "function"
name: "Statement.getFetchDirection"
signature: "int getFetchDirection() throws SQLException"
title: "Statement.getFetchDirection"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Statement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Statement.getFetchDirection

```java
int getFetchDirection() throws SQLException
```

Retrieves the direction for fetching rows from
 database tables that is the default for result sets
 generated from this `Statement` object.
 If this `Statement` object has not set
 a fetch direction by calling the method `setFetchDirection`,
 the return value is implementation-specific.

**返回**

- the default fetch direction for result sets generated from this `Statement` object

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed `Statement`

**参见**

- #setFetchDirection

> *Since 1.2*
