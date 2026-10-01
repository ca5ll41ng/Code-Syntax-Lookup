---
id: "java-en-function-namespacechangelistener-objectremoved"
language: "java"
lang: "en"
category: "function"
name: "NamespaceChangeListener.objectRemoved"
signature: "void objectRemoved(NamingEvent evt)"
title: "NamespaceChangeListener.objectRemoved"
directive: "method"
module: "java.naming/javax.naming.event"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/event/NamespaceChangeListener.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamespaceChangeListener.objectRemoved

```java
void objectRemoved(NamingEvent evt)
```

Called when an object has been removed.

 The binding of the newly removed object can be obtained using
 `evt.getOldBinding()`.

**参数**

- **evt** — The nonnull event.

**参见**

- NamingEvent#OBJECT_REMOVED
