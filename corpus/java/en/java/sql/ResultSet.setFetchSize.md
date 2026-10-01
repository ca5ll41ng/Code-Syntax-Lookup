---
id: "java-en-function-resultset-setfetchsize"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.setFetchSize"
signature: "void setFetchSize(int rows) throws SQLException"
title: "ResultSet.setFetchSize"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.setFetchSize

```java
void setFetchSize(int rows) throws SQLException
```

Gives the JDBC driver a hint as to the number of rows that should
 be fetched from the database when more rows are needed for this
 `ResultSet` object.
 If the fetch size specified is zero, the JDBC driver
 ignores the value and is free to make its own best guess as to what
 the fetch size should be.  The default value is set by the
 `Statement` object
 that created the result set.  The fetch size may be changed at any time.

**参数**

- **rows** — the number of rows to fetch

**异常**

- **SQLException** — if a database access error occurs; this method is called on a closed result set or the condition `rows >= 0` is not satisfied

**参见**

- #getFetchSize

> *Since 1.2*
