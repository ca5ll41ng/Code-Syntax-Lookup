---
id: "java-en-function-resultset-getmetadata"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.getMetaData"
signature: "ResultSetMetaData getMetaData() throws SQLException"
title: "ResultSet.getMetaData"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.getMetaData

```java
ResultSetMetaData getMetaData() throws SQLException
```

Retrieves the  number, types and properties of
 this `ResultSet` object's columns.

**返回**

- the description of this `ResultSet` object's columns

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed result set
