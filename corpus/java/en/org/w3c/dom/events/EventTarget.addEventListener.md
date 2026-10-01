---
id: "java-en-function-eventtarget-addeventlistener"
language: "java"
lang: "en"
category: "function"
name: "EventTarget.addEventListener"
signature: "public void addEventListener(String type, EventListener listener, boolean useCapture)"
title: "EventTarget.addEventListener"
directive: "method"
module: "java.xml/org.w3c.dom.events"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/events/EventTarget.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EventTarget.addEventListener

```java
public void addEventListener(String type, EventListener listener, boolean useCapture)
```

This method allows the registration of event listeners on the event
 target. If an EventListener is added to an
 EventTarget while it is processing an event, it will not
 be triggered by the current actions but may be triggered during a
 later stage of event flow, such as the bubbling phase.
 
 If multiple identical EventListeners are registered
 on the same EventTarget with the same parameters the
 duplicate instances are discarded. They do not cause the
 EventListener to be called twice and since they are
 discarded they do not need to be removed with the
 removeEventListener method.

**参数**

- **type** — The event type for which the user is registering
- **listener** — The listener parameter takes an interface implemented by the user which contains the methods to be called when the event occurs.
- **useCapture** — If true, useCapture indicates that the user wishes to initiate capture. After initiating capture, all events of the specified type will be dispatched to the registered EventListener before being dispatched to any EventTargets beneath them in the tree. Events which are bubbling upward through the tree will not trigger an EventListener designated to use capture.
