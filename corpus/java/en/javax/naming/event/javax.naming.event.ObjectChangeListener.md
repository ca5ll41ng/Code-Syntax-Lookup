---
id: "java-en-function-javax-naming-event-objectchangelistener"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.event.ObjectChangeListener"
title: "ObjectChangeListener"
directive: "type"
module: "java.naming/javax.naming.event"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/event/ObjectChangeListener.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectChangeListener

Specifies the method that a listener of a `NamingEvent`
 with event type of `OBJECT_CHANGED` must implement.

 An `OBJECT_CHANGED` event type is fired when (the contents of)
 an object has changed. This might mean that its attributes have been modified,
 added, or removed, and/or that the object itself has been replaced.
 How the object has changed can be determined by examining the
 `NamingEvent`'s old and new bindings.

 A listener interested in `OBJECT_CHANGED` event types must:

- Implement this interface and its method (`objectChanged()`)

- Implement `NamingListener.namingExceptionThrown()` so that
 it will be notified of exceptions thrown while attempting to
 collect information about the events.

- Register with the source using the source's `addNamingListener()`
    method.

 A listener that wants to be notified of namespace change events
 should also implement the `NamespaceChangeListener`
 interface.

**参见**

- NamingEvent
- NamespaceChangeListener
- EventContext
- EventDirContext

> *Since 1.3*
