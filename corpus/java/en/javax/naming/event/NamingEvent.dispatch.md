---
id: "java-en-function-namingevent-dispatch"
language: "java"
lang: "en"
category: "function"
name: "NamingEvent.dispatch"
signature: "public void dispatch(NamingListener listener)"
title: "NamingEvent.dispatch"
directive: "method"
module: "java.naming/javax.naming.event"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/event/NamingEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingEvent.dispatch

```java
public void dispatch(NamingListener listener)
```

Invokes the appropriate listener method on this event.
 The default implementation of
 this method handles the following event types:
 `OBJECT_ADDED, OBJECT_REMOVED,
 OBJECT_RENAMED, OBJECT_CHANGED`.

 The listener method is executed in the same thread
 as this method.  See the
 package description
 for more information on threading issues.

**参数**

- **listener** — The nonnull listener.
