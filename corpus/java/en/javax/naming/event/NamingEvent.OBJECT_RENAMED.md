---
id: "java-en-function-namingevent-object_renamed"
language: "java"
lang: "en"
category: "function"
name: "NamingEvent.OBJECT_RENAMED"
signature: "public static final int OBJECT_RENAMED = 2"
title: "NamingEvent.OBJECT_RENAMED"
directive: "field"
module: "java.naming/javax.naming.event"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/event/NamingEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingEvent.OBJECT_RENAMED

```java
public static final int OBJECT_RENAMED = 2
```

Naming event type for indicating that an object has been renamed.
 Note that some services might fire multiple events for a single
 logical rename operation. For example, the rename operation might
 be implemented by adding a binding with the new name and removing
 the old binding.

 The old/new binding in `NamingEvent` may be null if the old
 name or new name is outside of the scope for which the listener
 has registered.

 When an interior node in the namespace tree has been renamed, the
 topmost node which is part of the listener's scope should used to generate
 a rename event. The extent to which this can be supported is
 provider-specific. For example, a service might generate rename
 notifications for all descendants of the changed interior node and the
 corresponding provider might not be able to prevent those
 notifications from being propagated to the listeners.

 The value of this constant is `2`.
