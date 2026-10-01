---
id: "java-en-function-statement-getconnection"
language: "java"
lang: "en"
category: "function"
name: "Statement.getConnection"
signature: "Connection getConnection() throws SQLException"
title: "Statement.getConnection"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Statement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Statement.getConnection

```java
Connection getConnection() throws SQLException
```

Retrieves the `Connection` object
 that produced this `Statement` object.

**返回**

- the connection that produced this statement

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed `Statement`

> *Since 1.2*
