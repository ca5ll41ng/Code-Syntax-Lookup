---
id: "java-en-function-namingevent-namingevent"
language: "java"
lang: "en"
category: "function"
name: "NamingEvent.NamingEvent"
signature: "public NamingEvent(EventContext source, int type, Binding newBd, Binding oldBd, Object changeInfo)"
title: "NamingEvent.NamingEvent"
directive: "method"
module: "java.naming/javax.naming.event"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/event/NamingEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingEvent.NamingEvent

```java
public NamingEvent(EventContext source, int type, Binding newBd, Binding oldBd, Object changeInfo)
```

Constructs an instance of `NamingEvent`.

 The names in `newBd` and `oldBd` are to be resolved relative
 to the event source `source`.

 For an `OBJECT_ADDED` event type, `newBd` must not be null.
 For an `OBJECT_REMOVED` event type, `oldBd` must not be null.
 For an `OBJECT_CHANGED` event type,  `newBd` and
 `oldBd` must not be null. For  an `OBJECT_RENAMED` event type,
 one of `newBd` or `oldBd` may be null if the new or old
 binding is outside of the scope for which the listener has registered.

**参数**

- **source** — The non-null context that fired this event.
- **type** — The type of the event.
- **newBd** — A possibly null binding before the change. See method description.
- **oldBd** — A possibly null binding after the change. See method description.
- **changeInfo** — A possibly null object containing information about the change.

**参见**

- #OBJECT_ADDED
- #OBJECT_REMOVED
- #OBJECT_RENAMED
- #OBJECT_CHANGED
