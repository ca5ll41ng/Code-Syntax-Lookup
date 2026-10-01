---
id: "java-en-function-connection-close"
language: "java"
lang: "en"
category: "function"
name: "Connection.close"
signature: "void close() throws SQLException"
title: "Connection.close"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.close

```java
void close() throws SQLException
```

Releases this `Connection` object's database and JDBC resources
 immediately instead of waiting for them to be automatically released.
 

 Calling the method `close` on a `Connection`
 object that is already closed is a no-op.
 

 It is **strongly recommended** that an application explicitly
 commits or rolls back an active transaction prior to calling the
 `close` method.  If the `close` method is called
 and there is an active transaction, the results are implementation-defined.

**异常**

- **SQLException** — if a database access error occurs
