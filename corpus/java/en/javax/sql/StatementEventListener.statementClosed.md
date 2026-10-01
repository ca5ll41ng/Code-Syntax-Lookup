---
id: "java-en-function-statementeventlistener-statementclosed"
language: "java"
lang: "en"
category: "function"
name: "StatementEventListener.statementClosed"
signature: "void statementClosed(StatementEvent event)"
title: "StatementEventListener.statementClosed"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/StatementEventListener.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StatementEventListener.statementClosed

```java
void statementClosed(StatementEvent event)
```

The driver calls this method on all `StatementEventListener`s registered on the connection when it detects that a
 `PreparedStatement` is closed.

**参数**

- **event** — an event object describing the source of the event and that the `PreparedStatement` was closed.

> *Since 1.6*
