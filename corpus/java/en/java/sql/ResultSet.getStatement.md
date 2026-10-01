---
id: "java-en-function-resultset-getstatement"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.getStatement"
signature: "Statement getStatement() throws SQLException"
title: "ResultSet.getStatement"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.getStatement

```java
Statement getStatement() throws SQLException
```

Retrieves the `Statement` object that produced this
 `ResultSet` object.
 If the result set was generated some other way, such as by a
 `DatabaseMetaData` method, this method  may return
 `null`.

**返回**

- the `Statement` object that produced this `ResultSet` object or `null` if the result set was produced some other way

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed result set

> *Since 1.2*
