---
id: "java-en-function-pooledconnection-removestatementeventlistener"
language: "java"
lang: "en"
category: "function"
name: "PooledConnection.removeStatementEventListener"
signature: "public void removeStatementEventListener(StatementEventListener listener)"
title: "PooledConnection.removeStatementEventListener"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/PooledConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PooledConnection.removeStatementEventListener

```java
public void removeStatementEventListener(StatementEventListener listener)
```

Removes the specified `StatementEventListener` from the list of
 components that will be notified when the driver detects that a
 `PreparedStatement` has been closed or is invalid.

**参数**

- **listener** — the component which implements the `StatementEventListener` interface that was previously registered with this `PooledConnection` object

> *Since 1.6*
