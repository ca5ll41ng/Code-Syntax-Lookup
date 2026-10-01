---
id: "java-en-function-connection-setreadonly"
language: "java"
lang: "en"
category: "function"
name: "Connection.setReadOnly"
signature: "void setReadOnly(boolean readOnly) throws SQLException"
title: "Connection.setReadOnly"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.setReadOnly

```java
void setReadOnly(boolean readOnly) throws SQLException
```

Puts this connection in read-only mode as a hint to the driver to enable
 database optimizations.

 

**Note:** This method cannot be called during a transaction.

**参数**

- **readOnly** — `true` enables read-only mode; `false` disables it

**异常**

- **SQLException** — if a database access error occurs, this method is called on a closed connection or this method is called during a transaction
