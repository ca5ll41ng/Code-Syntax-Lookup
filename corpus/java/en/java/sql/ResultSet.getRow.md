---
id: "java-en-function-resultset-getrow"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.getRow"
signature: "int getRow() throws SQLException"
title: "ResultSet.getRow"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.getRow

```java
int getRow() throws SQLException
```

Retrieves the current row number.  The first row is number 1, the
 second number 2, and so on.
 

 **Note:**Support for the `getRow` method
 is optional for `ResultSet`s with a result
 set type of `TYPE_FORWARD_ONLY`

**返回**

- the current row number; `0` if there is no current row

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed result set
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
