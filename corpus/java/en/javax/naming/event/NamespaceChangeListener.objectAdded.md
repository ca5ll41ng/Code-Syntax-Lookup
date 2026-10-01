---
id: "java-en-function-namespacechangelistener-objectadded"
language: "java"
lang: "en"
category: "function"
name: "NamespaceChangeListener.objectAdded"
signature: "void objectAdded(NamingEvent evt)"
title: "NamespaceChangeListener.objectAdded"
directive: "method"
module: "java.naming/javax.naming.event"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/event/NamespaceChangeListener.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamespaceChangeListener.objectAdded

```java
void objectAdded(NamingEvent evt)
```

Called when an object has been added.

 The binding of the newly added object can be obtained using
 `evt.getNewBinding()`.

**参数**

- **evt** — The nonnull event.

**参见**

- NamingEvent#OBJECT_ADDED
