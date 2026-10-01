---
id: "java-en-function-statement-getfetchsize"
language: "java"
lang: "en"
category: "function"
name: "Statement.getFetchSize"
signature: "int getFetchSize() throws SQLException"
title: "Statement.getFetchSize"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Statement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Statement.getFetchSize

```java
int getFetchSize() throws SQLException
```

Retrieves the number of result set rows that is the default
 fetch size for `ResultSet` objects
 generated from this `Statement` object.
 If this `Statement` object has not set
 a fetch size by calling the method `setFetchSize`,
 the return value is implementation-specific.

**返回**

- the default fetch size for result sets generated from this `Statement` object

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed `Statement`

**参见**

- #setFetchSize

> *Since 1.2*
