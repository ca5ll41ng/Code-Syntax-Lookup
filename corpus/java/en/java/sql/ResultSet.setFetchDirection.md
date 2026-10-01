---
id: "java-en-function-resultset-setfetchdirection"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.setFetchDirection"
signature: "void setFetchDirection(int direction) throws SQLException"
title: "ResultSet.setFetchDirection"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.setFetchDirection

```java
void setFetchDirection(int direction) throws SQLException
```

Gives a hint as to the direction in which the rows in this
 `ResultSet` object will be processed.
 The initial value is determined by the
 `Statement` object
 that produced this `ResultSet` object.
 The fetch direction may be changed at any time.

**参数**

- **direction** — an `int` specifying the suggested fetch direction; one of `ResultSet.FETCH_FORWARD`, `ResultSet.FETCH_REVERSE`, or `ResultSet.FETCH_UNKNOWN`

**异常**

- **SQLException** — if a database access error occurs; this method is called on a closed result set or the result set type is `TYPE_FORWARD_ONLY` and the fetch direction is not `FETCH_FORWARD`

**参见**

- Statement#setFetchDirection
- #getFetchDirection

> *Since 1.2*
