---
id: "java-en-function-event-stoppropagation"
language: "java"
lang: "en"
category: "function"
name: "Event.stopPropagation"
signature: "public void stopPropagation()"
title: "Event.stopPropagation"
directive: "method"
module: "java.xml/org.w3c.dom.events"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/events/Event.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Event.stopPropagation

```java
public void stopPropagation()
```

The stopPropagation method is used prevent further
 propagation of an event during event flow. If this method is called
 by any EventListener the event will cease propagating
 through the tree. The event will complete dispatch to all listeners
 on the current EventTarget before event flow stops. This
 method may be used during any stage of event flow.
