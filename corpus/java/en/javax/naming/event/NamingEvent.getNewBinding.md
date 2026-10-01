---
id: "java-en-function-namingevent-getnewbinding"
language: "java"
lang: "en"
category: "function"
name: "NamingEvent.getNewBinding"
signature: "public Binding getNewBinding()"
title: "NamingEvent.getNewBinding"
directive: "method"
module: "java.naming/javax.naming.event"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/event/NamingEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingEvent.getNewBinding

```java
public Binding getNewBinding()
```

Retrieves the binding of the object after the change.

 The binding must be nonnull if the object existed after the change
 relative to the source context (`getEventContext()`).
 That is, it must be nonnull for `OBJECT_ADDED` and
 `OBJECT_CHANGED`. For `OBJECT_RENAMED`,
 it is null if the object after the rename is outside the scope for
 which the listener registered interest; it is nonnull if the object
 is inside the scope after the rename.

 The name in the binding is to be resolved relative
 to the event source `getEventContext()`.
 The object returned by `Binding.getObject()` may be null if
 such information is unavailable.

**返回**

- The possibly null binding of the object after the change.
