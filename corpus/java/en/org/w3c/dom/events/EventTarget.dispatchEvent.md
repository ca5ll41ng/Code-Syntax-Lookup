---
id: "java-en-function-eventtarget-dispatchevent"
language: "java"
lang: "en"
category: "function"
name: "EventTarget.dispatchEvent"
signature: "public boolean dispatchEvent(Event evt) throws EventException"
title: "EventTarget.dispatchEvent"
directive: "method"
module: "java.xml/org.w3c.dom.events"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/events/EventTarget.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EventTarget.dispatchEvent

```java
public boolean dispatchEvent(Event evt) throws EventException
```

This method allows the dispatch of events into the implementations
 event model. Events dispatched in this manner will have the same
 capturing and bubbling behavior as events dispatched directly by the
 implementation. The target of the event is the
  EventTarget on which dispatchEvent is
 called.

**参数**

- **evt** — Specifies the event type, behavior, and contextual information to be used in processing the event.

**返回**

- The return value of dispatchEvent indicates whether any of the listeners which handled the event called preventDefault. If preventDefault was called the value is false, else the value is true.

**异常**

- **EventException** — UNSPECIFIED_EVENT_TYPE_ERR: Raised if the Event's type was not specified by initializing the event before dispatchEvent was called. Specification of the Event's type as null or an empty string will also trigger this exception.
