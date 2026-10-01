---
id: "java-en-function-javax-naming-event-namingevent"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.event.NamingEvent"
title: "NamingEvent"
directive: "type"
module: "java.naming/javax.naming.event"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/event/NamingEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingEvent

This class represents an event fired by a naming/directory service.

 The `NamingEvent`'s state consists of
 
 
- The event source: the `EventContext` which fired this event.
 
- The event type.
 
- The new binding: information about the object after the change.
 
- The old binding: information about the object before the change.
 
- Change information: information about the change
 that triggered this event; usually service provider-specific or server-specific
 information.
 

 

 Note that the event source is always the same `EventContext`
 instance  that the listener has registered with.
 Furthermore, the names of the bindings in
 the `NamingEvent` are always relative to that instance.
 For example, suppose a listener makes the following registration:

```

     NamespaceChangeListener listener = ...;
     src.addNamingListener("x", SUBTREE_SCOPE, listener);

```

 When an object named "x/y" is subsequently deleted, the corresponding
 `NamingEvent` (`evt`) must contain:

```

     evt.getEventContext() == src
     evt.getOldBinding().getName().equals("x/y")

```

 Care must be taken when multiple threads are accessing the same
 `EventContext` concurrently.
 See the
 package description
 for more information on threading issues.

**参见**

- NamingListener
- EventContext

> *Since 1.3*
