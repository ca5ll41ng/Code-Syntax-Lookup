---
id: "java-en-function-resultset-isbeforefirst"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.isBeforeFirst"
signature: "boolean isBeforeFirst() throws SQLException"
title: "ResultSet.isBeforeFirst"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.isBeforeFirst

```java
boolean isBeforeFirst() throws SQLException
```

Retrieves whether the cursor is before the first row in
 this `ResultSet` object.
 

 **Note:**Support for the `isBeforeFirst` method
 is optional for `ResultSet`s with a result
 set type of `TYPE_FORWARD_ONLY`

**返回**

- `true` if the cursor is before the first row; `false` if the cursor is at any other position or the result set contains no rows

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed result set
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
