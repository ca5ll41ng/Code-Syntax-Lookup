---
id: "java-en-function-connection-getcatalog"
language: "java"
lang: "en"
category: "function"
name: "Connection.getCatalog"
signature: "String getCatalog() throws SQLException"
title: "Connection.getCatalog"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.getCatalog

```java
String getCatalog() throws SQLException
```

Retrieves this `Connection` object's current catalog name.

**返回**

- the current catalog name or `null` if there is none

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed connection

**参见**

- #setCatalog
