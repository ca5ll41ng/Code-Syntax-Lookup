---
id: "java-en-function-connection-beginrequest"
language: "java"
lang: "en"
category: "function"
name: "Connection.beginRequest"
signature: "default void beginRequest() throws SQLException"
title: "Connection.beginRequest"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.beginRequest

```java
default void beginRequest() throws SQLException
```

Hints to the driver that a request, an independent unit of work, is beginning
 on this connection. Each request is independent of all other requests
 with regard to state local to the connection either on the client or the
 server. Work done between `beginRequest`, `endRequest`
 pairs does not depend on any other work done on the connection either as
 part of another request or outside of any request. A request may include multiple
 transactions. There may be dependencies on committed database state as
 that is not local to the connection.
 

 Local state is defined as any state associated with a Connection that is
 local to the current Connection either in the client or the database that
 is not transparently reproducible.
 

 Calls to `beginRequest` and `endRequest`  are not nested.
 Multiple calls to `beginRequest` without an intervening call
 to `endRequest` is not an error. The first `beginRequest` call
 marks the start of the request and subsequent calls are treated as
 a no-op
 

 Use of `beginRequest` and `endRequest` is optional, vendor
 specific and should largely be transparent. In particular
 implementations may detect conditions that indicate dependence on
 other work such as an open transaction. It is recommended though not
 required that implementations throw a `SQLException` if there is an active
 transaction and `beginRequest` is called.
 Using these methods may improve performance or provide other benefits.
 Consult your vendors documentation for additional information.
 

 It is recommended to
 enclose each unit of work in `beginRequest`, `endRequest`
 pairs such that there is no open transaction at the beginning or end of
 the request and no dependency on local state that crosses request
 boundaries. Committed database state is not local.

 The default implementation is a no-op.

 This method is to be used by Connection pooling managers.
 

 The pooling manager should call `beginRequest` on the underlying connection
 prior to returning a connection to the caller.
 

 The pooling manager does not need to call `beginRequest` if:
 
 
- The connection pool caches `PooledConnection` objects
 
- Returns a logical connection handle when `getConnection` is
 called by the application
 
- The logical `Connection` is closed by calling
 `Connection.close` prior to returning the `PooledConnection`
 to the cache.

**异常**

- **SQLException** — if an error occurs

**参见**

- #endRequest()
- javax.sql.PooledConnection

> *Since 9*
