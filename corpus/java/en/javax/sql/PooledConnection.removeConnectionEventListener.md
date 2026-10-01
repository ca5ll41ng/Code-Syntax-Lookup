---
id: "java-en-function-pooledconnection-removeconnectioneventlistener"
language: "java"
lang: "en"
category: "function"
name: "PooledConnection.removeConnectionEventListener"
signature: "void removeConnectionEventListener(ConnectionEventListener listener)"
title: "PooledConnection.removeConnectionEventListener"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/PooledConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PooledConnection.removeConnectionEventListener

```java
void removeConnectionEventListener(ConnectionEventListener listener)
```

Removes the given event listener from the list of components that
 will be notified when an event occurs on this
 `PooledConnection` object.

**参数**

- **listener** — a component, usually the connection pool manager, that has implemented the `ConnectionEventListener` interface and been registered with this `PooledConnection` object as a listener

**参见**

- #addConnectionEventListener
