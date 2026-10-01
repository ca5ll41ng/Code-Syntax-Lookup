---
id: "java-en-function-eventcontext-removenaminglistener"
language: "java"
lang: "en"
category: "function"
name: "EventContext.removeNamingListener"
signature: "void removeNamingListener(NamingListener l) throws NamingException"
title: "EventContext.removeNamingListener"
directive: "method"
module: "java.naming/javax.naming.event"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/event/EventContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EventContext.removeNamingListener

```java
void removeNamingListener(NamingListener l) throws NamingException
```

Removes a listener from receiving naming events fired
 by this `EventContext`.
 The listener may have registered more than once with this
 `EventContext`, perhaps with different target/scope arguments.
 After this method is invoked, the listener will no longer
 receive events with this `EventContext` instance
 as the event source (except for those events already in the process of
 being dispatched).
 If the listener was not, or is no longer, registered with
 this `EventContext` instance, this method does not do anything.

**参数**

- **l** — The nonnull listener.

**异常**

- **NamingException** — If a problem was encountered while removing the listener.

**参见**

- #addNamingListener
