---
id: "java-en-function-sqlinput-readdate"
language: "java"
lang: "en"
category: "function"
name: "SQLInput.readDate"
signature: "java.sql.Date readDate() throws SQLException"
title: "SQLInput.readDate"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLInput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLInput.readDate

```java
java.sql.Date readDate() throws SQLException
```

Reads the next attribute in the stream and returns it as a `java.sql.Date` object.

**返回**

- the attribute; if the value is SQL `NULL`, returns `null`

**异常**

- **SQLException** — if a database access error occurs
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
