---
id: "java-en-function-connection-abort"
language: "java"
lang: "en"
category: "function"
name: "Connection.abort"
signature: "void abort(Executor executor) throws SQLException"
title: "Connection.abort"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.abort

```java
void abort(Executor executor) throws SQLException
```

Terminates an open connection.  Calling `abort` results in:
 
 
- The connection marked as closed
 
- Closes any physical connection to the database
 
- Releases resources used by the connection
 
- Insures that any thread that is currently accessing the connection
 will either progress to completion or throw an `SQLException`.
 

 

 Calling `abort` marks the connection closed and releases any
 resources. Calling `abort` on a closed connection is a
 no-op.
 

 It is possible that the aborting and releasing of the resources that are
 held by the connection can take an extended period of time.  When the
 `abort` method returns, the connection will have been marked as
 closed and the `Executor` that was passed as a parameter to abort
 may still be executing tasks to release resources.

**参数**

- **executor** — The `Executor`  implementation which will be used by `abort`.

**异常**

- **java.sql.SQLException** — if a database access error occurs or the `executor` is `null`

**参见**

- Executor

> *Since 1.7*
