---
id: "java-en-function-connectioneventlistener-connectionerroroccurred"
language: "java"
lang: "en"
category: "function"
name: "ConnectionEventListener.connectionErrorOccurred"
signature: "void connectionErrorOccurred(ConnectionEvent event)"
title: "ConnectionEventListener.connectionErrorOccurred"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/ConnectionEventListener.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConnectionEventListener.connectionErrorOccurred

```java
void connectionErrorOccurred(ConnectionEvent event)
```

Notifies this `ConnectionEventListener` that
 a fatal error has occurred and the pooled connection can
 no longer be used.  The driver makes this notification just
 before it throws the application the `SQLException`
 contained in the given `ConnectionEvent` object.

**参数**

- **event** — an event object describing the source of the event and containing the `SQLException` that the driver is about to throw
