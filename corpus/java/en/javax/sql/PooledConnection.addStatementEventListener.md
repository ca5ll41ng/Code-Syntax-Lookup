---
id: "java-en-function-pooledconnection-addstatementeventlistener"
language: "java"
lang: "en"
category: "function"
name: "PooledConnection.addStatementEventListener"
signature: "public void addStatementEventListener(StatementEventListener listener)"
title: "PooledConnection.addStatementEventListener"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/PooledConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PooledConnection.addStatementEventListener

```java
public void addStatementEventListener(StatementEventListener listener)
```

Registers a `StatementEventListener` with this `PooledConnection` object.  Components that
 wish to be notified when  `PreparedStatement`s created by the
 connection are closed or are detected to be invalid may use this method
 to register a `StatementEventListener` with this `PooledConnection` object.

**参数**

- **listener** — an component which implements the `StatementEventListener` interface that is to be registered with this `PooledConnection` object

> *Since 1.6*
