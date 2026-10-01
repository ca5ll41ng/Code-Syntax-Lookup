---
id: "java-en-function-resultset-isfirst"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.isFirst"
signature: "boolean isFirst() throws SQLException"
title: "ResultSet.isFirst"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.isFirst

```java
boolean isFirst() throws SQLException
```

Retrieves whether the cursor is on the first row of
 this `ResultSet` object.
 

 **Note:**Support for the `isFirst` method
 is optional for `ResultSet`s with a result
 set type of `TYPE_FORWARD_ONLY`

**返回**

- `true` if the cursor is on the first row; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed result set
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
