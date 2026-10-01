---
id: "java-en-function-statementeventlistener-statementerroroccurred"
language: "java"
lang: "en"
category: "function"
name: "StatementEventListener.statementErrorOccurred"
signature: "void statementErrorOccurred(StatementEvent event)"
title: "StatementEventListener.statementErrorOccurred"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/StatementEventListener.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StatementEventListener.statementErrorOccurred

```java
void statementErrorOccurred(StatementEvent event)
```

The driver calls this method on all `StatementEventListener`s
 registered on the connection when it detects that a
 `PreparedStatement` is invalid. The driver calls this method
 just before it throws the `SQLException`,
 contained in the given event, to the application.

**参数**

- **event** — an event object describing the source of the event, the statement that is invalid and the exception the driver is about to throw.  The source of the event is the `PooledConnection` which the invalid `PreparedStatement` is associated with.

> *Since 1.6*
