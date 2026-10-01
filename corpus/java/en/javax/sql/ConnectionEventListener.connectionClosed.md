---
id: "java-en-function-connectioneventlistener-connectionclosed"
language: "java"
lang: "en"
category: "function"
name: "ConnectionEventListener.connectionClosed"
signature: "void connectionClosed(ConnectionEvent event)"
title: "ConnectionEventListener.connectionClosed"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/ConnectionEventListener.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConnectionEventListener.connectionClosed

```java
void connectionClosed(ConnectionEvent event)
```

Notifies this `ConnectionEventListener` that
 the application has called the method `close` on its
 representation of a pooled connection.

**参数**

- **event** — an event object describing the source of the event
