---
id: "java-en-function-connection-getschema"
language: "java"
lang: "en"
category: "function"
name: "Connection.getSchema"
signature: "String getSchema() throws SQLException"
title: "Connection.getSchema"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.getSchema

```java
String getSchema() throws SQLException
```

Retrieves this `Connection` object's current schema name.

**返回**

- the current schema name or `null` if there is none

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed connection

**参见**

- #setSchema

> *Since 1.7*
