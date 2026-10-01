---
id: "java-en-function-connectionevent-connectionevent"
language: "java"
lang: "en"
category: "function"
name: "ConnectionEvent.ConnectionEvent"
signature: "public ConnectionEvent(PooledConnection con)"
title: "ConnectionEvent.ConnectionEvent"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/ConnectionEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConnectionEvent.ConnectionEvent

```java
public ConnectionEvent(PooledConnection con)
```

Constructs a `ConnectionEvent` object initialized with
 the given `PooledConnection` object. `SQLException`
 defaults to `null`.

**参数**

- **con** — the pooled connection that is the source of the event

**异常**

- **IllegalArgumentException** — if `con` is null.
