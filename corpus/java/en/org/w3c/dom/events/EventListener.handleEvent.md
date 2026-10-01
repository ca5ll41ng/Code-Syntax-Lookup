---
id: "java-en-function-eventlistener-handleevent"
language: "java"
lang: "en"
category: "function"
name: "EventListener.handleEvent"
signature: "public void handleEvent(Event evt)"
title: "EventListener.handleEvent"
directive: "method"
module: "java.xml/org.w3c.dom.events"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/events/EventListener.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EventListener.handleEvent

```java
public void handleEvent(Event evt)
```

This method is called whenever an event occurs of the type for which
 the  EventListener interface was registered.

**参数**

- **evt** — The Event contains contextual information about the event. It also contains the stopPropagation and preventDefault methods which are used in determining the event's flow and default action.
