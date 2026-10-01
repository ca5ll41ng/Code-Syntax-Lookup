---
id: "java-en-function-namingexceptionevent-geteventcontext"
language: "java"
lang: "en"
category: "function"
name: "NamingExceptionEvent.getEventContext"
signature: "public EventContext getEventContext()"
title: "NamingExceptionEvent.getEventContext"
directive: "method"
module: "java.naming/javax.naming.event"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/event/NamingExceptionEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingExceptionEvent.getEventContext

```java
public EventContext getEventContext()
```

Retrieves the `EventContext` that fired this event.
 This returns the same object as `EventObject.getSource()`.

**返回**

- The non-null `EventContext` that fired this event.
