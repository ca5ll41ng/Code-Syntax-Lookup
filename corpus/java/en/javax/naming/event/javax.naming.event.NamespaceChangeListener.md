---
id: "java-en-function-javax-naming-event-namespacechangelistener"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.event.NamespaceChangeListener"
title: "NamespaceChangeListener"
directive: "type"
module: "java.naming/javax.naming.event"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/event/NamespaceChangeListener.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamespaceChangeListener

Specifies the methods that a listener interested in namespace changes
 must implement.
 Specifically, the listener is interested in `NamingEvent`s
 with event types of `OBJECT_ADDED, OBJECT_RENAMED`, or
 `OBJECT_REMOVED`.

 Such a listener must:

- Implement this interface and its methods.

- Implement `NamingListener.namingExceptionThrown()` so that
 it will be notified of exceptions thrown while attempting to
 collect information about the events.

- Register with the source using the source's `addNamingListener()`
    method.

 A listener that wants to be notified of `OBJECT_CHANGED` event types
 should also implement the `ObjectChangeListener`
 interface.

**参见**

- NamingEvent
- ObjectChangeListener
- EventContext
- EventDirContext

> *Since 1.3*
