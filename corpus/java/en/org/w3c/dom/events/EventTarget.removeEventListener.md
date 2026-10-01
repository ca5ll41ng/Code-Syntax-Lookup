---
id: "java-en-function-eventtarget-removeeventlistener"
language: "java"
lang: "en"
category: "function"
name: "EventTarget.removeEventListener"
signature: "public void removeEventListener(String type, EventListener listener, boolean useCapture)"
title: "EventTarget.removeEventListener"
directive: "method"
module: "java.xml/org.w3c.dom.events"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/events/EventTarget.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EventTarget.removeEventListener

```java
public void removeEventListener(String type, EventListener listener, boolean useCapture)
```

This method allows the removal of event listeners from the event
 target. If an EventListener is removed from an
 EventTarget while it is processing an event, it will not
 be triggered by the current actions. EventListeners can
 never be invoked after being removed.
 
Calling removeEventListener with arguments which do
 not identify any currently registered EventListener on
 the EventTarget has no effect.

**参数**

- **type** — Specifies the event type of the EventListener being removed.
- **listener** — The EventListener parameter indicates the EventListener  to be removed.
- **useCapture** — Specifies whether the EventListener being removed was registered as a capturing listener or not. If a listener was registered twice, one with capture and one without, each must be removed separately. Removal of a capturing listener does not affect a non-capturing version of the same listener, and vice versa.
