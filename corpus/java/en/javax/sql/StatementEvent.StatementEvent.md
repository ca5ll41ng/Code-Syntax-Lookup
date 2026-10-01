---
id: "java-en-function-statementevent-statementevent"
language: "java"
lang: "en"
category: "function"
name: "StatementEvent.StatementEvent"
signature: "public StatementEvent(PooledConnection con, PreparedStatement statement)"
title: "StatementEvent.StatementEvent"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/StatementEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StatementEvent.StatementEvent

```java
public StatementEvent(PooledConnection con, PreparedStatement statement)
```

Constructs a `StatementEvent` with the specified `PooledConnection` and
 `PreparedStatement`.  The `SQLException` contained in the event defaults to
 null.

**参数**

- **con** — The `PooledConnection` that the closed or invalid `PreparedStatement`is associated with.
- **statement** — The `PreparedStatement` that is being closed or is invalid

**异常**

- **IllegalArgumentException** — if `con` is null.

> *Since 1.6*
