---
id: "java-en-function-objectchangelistener-objectchanged"
language: "java"
lang: "en"
category: "function"
name: "ObjectChangeListener.objectChanged"
signature: "void objectChanged(NamingEvent evt)"
title: "ObjectChangeListener.objectChanged"
directive: "method"
module: "java.naming/javax.naming.event"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/event/ObjectChangeListener.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectChangeListener.objectChanged

```java
void objectChanged(NamingEvent evt)
```

Called when an object has been changed.

 The binding of the changed object can be obtained using
 `evt.getNewBinding()`. Its old binding (before the change)
 can be obtained using `evt.getOldBinding()`.

**参数**

- **evt** — The nonnull naming event.

**参见**

- NamingEvent#OBJECT_CHANGED
