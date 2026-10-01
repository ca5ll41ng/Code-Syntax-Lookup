---
id: "java-en-function-connection-isclosed"
language: "java"
lang: "en"
category: "function"
name: "Connection.isClosed"
signature: "boolean isClosed() throws SQLException"
title: "Connection.isClosed"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.isClosed

```java
boolean isClosed() throws SQLException
```

Retrieves whether this `Connection` object has been
 closed.  A connection is closed if the method `close`
 has been called on it or if certain fatal errors have occurred.
 This method is guaranteed to return `true` only when
 it is called after the method `Connection.close` has
 been called.
 

 This method generally cannot be called to determine whether a
 connection to a database is valid or invalid.  A typical client
 can determine that a connection is invalid by catching any
 exceptions that might be thrown when an operation is attempted.

**返回**

- `true` if this `Connection` object is closed; `false` if it is still open

**异常**

- **SQLException** — if a database access error occurs
