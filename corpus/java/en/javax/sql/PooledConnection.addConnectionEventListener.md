---
id: "java-en-function-pooledconnection-addconnectioneventlistener"
language: "java"
lang: "en"
category: "function"
name: "PooledConnection.addConnectionEventListener"
signature: "void addConnectionEventListener(ConnectionEventListener listener)"
title: "PooledConnection.addConnectionEventListener"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/PooledConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PooledConnection.addConnectionEventListener

```java
void addConnectionEventListener(ConnectionEventListener listener)
```

Registers the given event listener so that it will be notified
 when an event occurs on this `PooledConnection` object.

**参数**

- **listener** — a component, usually the connection pool manager, that has implemented the `ConnectionEventListener` interface and wants to be notified when the connection is closed or has an error

**参见**

- #removeConnectionEventListener
