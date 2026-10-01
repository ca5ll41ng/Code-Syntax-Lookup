---
id: "java-en-function-namespacechangelistener-objectrenamed"
language: "java"
lang: "en"
category: "function"
name: "NamespaceChangeListener.objectRenamed"
signature: "void objectRenamed(NamingEvent evt)"
title: "NamespaceChangeListener.objectRenamed"
directive: "method"
module: "java.naming/javax.naming.event"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/event/NamespaceChangeListener.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamespaceChangeListener.objectRenamed

```java
void objectRenamed(NamingEvent evt)
```

Called when an object has been renamed.

 The binding of the renamed object can be obtained using
 `evt.getNewBinding()`. Its old binding (before the rename)
 can be obtained using `evt.getOldBinding()`.
 One of these may be null if the old/new binding was outside the
 scope in which the listener has registered interest.

**参数**

- **evt** — The nonnull event.

**参见**

- NamingEvent#OBJECT_RENAMED
