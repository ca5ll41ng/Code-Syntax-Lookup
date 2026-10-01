---
id: "java-en-function-connection-endrequest"
language: "java"
lang: "en"
category: "function"
name: "Connection.endRequest"
signature: "default void endRequest() throws SQLException"
title: "Connection.endRequest"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.endRequest

```java
default void endRequest() throws SQLException
```

Hints to the driver that a request, an independent unit of work,
 has completed. Calls to `beginRequest`
 and `endRequest` are not nested. Multiple
 calls to `endRequest` without an intervening call to `beginRequest`
 is not an error. The first `endRequest` call
 marks the request completed and subsequent calls are treated as
 a no-op. If `endRequest` is called without an initial call to
 `beginRequest` is a no-op.
 

 The exact behavior of this method is vendor specific. In particular
 implementations may detect conditions that indicate dependence on
 other work such as an open transaction. It is recommended though not
 required that implementations throw a `SQLException` if there is an active
 transaction and `endRequest` is called.

 The default implementation is a no-op.

 This method is to be used by Connection pooling managers.
 

 The pooling manager should call `endRequest` on the underlying connection
 when the applications returns the connection back to the connection pool.
 

 The pooling manager does not need to call `endRequest` if:
 
 
- The connection pool caches `PooledConnection` objects
 
- Returns a logical connection handle when `getConnection` is
 called by the application
 
- The logical `Connection` is closed by calling
 `Connection.close` prior to returning the `PooledConnection`
 to the cache.

**异常**

- **SQLException** — if an error occurs

**参见**

- #beginRequest()
- javax.sql.PooledConnection

> *Since 9*
