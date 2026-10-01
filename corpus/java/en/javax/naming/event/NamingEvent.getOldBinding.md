---
id: "java-en-function-namingevent-getoldbinding"
language: "java"
lang: "en"
category: "function"
name: "NamingEvent.getOldBinding"
signature: "public Binding getOldBinding()"
title: "NamingEvent.getOldBinding"
directive: "method"
module: "java.naming/javax.naming.event"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/event/NamingEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingEvent.getOldBinding

```java
public Binding getOldBinding()
```

Retrieves the binding of the object before the change.

 The binding must be nonnull if the object existed before the change
 relative to the source context (`getEventContext()`).
 That is, it must be nonnull for `OBJECT_REMOVED` and
 `OBJECT_CHANGED`.
 For `OBJECT_RENAMED`, it is null if the object before the rename
 is outside of the scope for which the listener has registered interest;
 it is nonnull if the object is inside the scope before the rename.

 The name in the binding is to be resolved relative
 to the event source `getEventContext()`.
 The object returned by `Binding.getObject()` may be null if
 such information is unavailable.

**返回**

- The possibly null binding of the object before the change.
