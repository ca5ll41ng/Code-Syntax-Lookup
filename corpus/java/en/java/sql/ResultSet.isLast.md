---
id: "java-en-function-resultset-islast"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.isLast"
signature: "boolean isLast() throws SQLException"
title: "ResultSet.isLast"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.isLast

```java
boolean isLast() throws SQLException
```

Retrieves whether the cursor is on the last row of
 this `ResultSet` object.
  **Note:** Calling the method `isLast` may be expensive
 because the JDBC driver
 might need to fetch ahead one row in order to determine
 whether the current row is the last row in the result set.
 

 **Note:** Support for the `isLast` method
 is optional for `ResultSet`s with a result
 set type of `TYPE_FORWARD_ONLY`

**返回**

- `true` if the cursor is on the last row; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed result set
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
