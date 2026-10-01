---
id: "java-en-function-namingevent-object_changed"
language: "java"
lang: "en"
category: "function"
name: "NamingEvent.OBJECT_CHANGED"
signature: "public static final int OBJECT_CHANGED = 3"
title: "NamingEvent.OBJECT_CHANGED"
directive: "field"
module: "java.naming/javax.naming.event"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/event/NamingEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingEvent.OBJECT_CHANGED

```java
public static final int OBJECT_CHANGED = 3
```

Naming event type for indicating that an object has been changed.
 The changes might include the object's attributes, or the object itself.
 Note that some services might fire multiple events for a single
 modification. For example, the modification might
 be implemented by first removing the old binding and adding
 a new binding containing the same name but a different object.

 The value of this constant is `3`.
