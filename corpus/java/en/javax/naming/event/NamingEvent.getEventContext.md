---
id: "java-en-function-namingevent-geteventcontext"
language: "java"
lang: "en"
category: "function"
name: "NamingEvent.getEventContext"
signature: "public EventContext getEventContext()"
title: "NamingEvent.getEventContext"
directive: "method"
module: "java.naming/javax.naming.event"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/event/NamingEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingEvent.getEventContext

```java
public EventContext getEventContext()
```

Retrieves the event source that fired this event.
 This returns the same object as `EventObject.getSource()`.

 If the result of this method is used to access the
 event source, for example, to look up the object or get its attributes,
 then it needs to be locked  because implementations of `Context`
 are not guaranteed to be thread-safe
 (and `EventContext` is a subinterface of `Context`).
 See the
 package description
 for more information on threading issues.

**返回**

- The non-null context that fired this event.
