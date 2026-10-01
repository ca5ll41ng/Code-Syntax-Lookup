---
id: "java-en-function-rowset-seturl"
language: "java"
lang: "en"
category: "function"
name: "RowSet.setUrl"
signature: "void setUrl(String url) throws SQLException"
title: "RowSet.setUrl"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.setUrl

```java
void setUrl(String url) throws SQLException
```

Sets the URL this `RowSet` object will use when it uses the
 `DriverManager` to create a connection.

 Setting this property is optional.  If a URL is used, a JDBC driver
 that accepts the URL must be loaded before the
 rowset is used to connect to a database.  The rowset will use the URL
 internally to create a database connection when reading or writing
 data.  Either a URL or a data source name is used to create a
 connection, whichever was set to non null value most recently.

**参数**

- **url** — a string value; may be `null`

**异常**

- **SQLException** — if a database access error occurs

**参见**

- #getUrl
