---
id: "java-en-function-connection-isreadonly"
language: "java"
lang: "en"
category: "function"
name: "Connection.isReadOnly"
signature: "boolean isReadOnly() throws SQLException"
title: "Connection.isReadOnly"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.isReadOnly

```java
boolean isReadOnly() throws SQLException
```

Retrieves whether this `Connection`
 object is in read-only mode.

**返回**

- `true` if this `Connection` object is read-only; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed connection
