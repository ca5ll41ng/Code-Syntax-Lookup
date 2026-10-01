---
id: "java-en-function-rowset-geturl"
language: "java"
lang: "en"
category: "function"
name: "RowSet.getUrl"
signature: "String getUrl() throws SQLException"
title: "RowSet.getUrl"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.getUrl

```java
String getUrl() throws SQLException
```

Retrieves the url property this `RowSet` object will use to
 create a connection if it uses the `DriverManager`
 instead of a `DataSource` object to establish the connection.
 The default value is `null`.

**返回**

- a string url

**异常**

- **SQLException** — if a database access error occurs

**参见**

- #setUrl
