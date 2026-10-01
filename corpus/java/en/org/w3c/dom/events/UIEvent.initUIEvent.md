---
id: "java-en-function-uievent-inituievent"
language: "java"
lang: "en"
category: "function"
name: "UIEvent.initUIEvent"
signature: "public void initUIEvent(String typeArg, boolean canBubbleArg, boolean cancelableArg, AbstractView viewArg, int detailArg)"
title: "UIEvent.initUIEvent"
directive: "method"
module: "java.xml/org.w3c.dom.events"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/events/UIEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UIEvent.initUIEvent

```java
public void initUIEvent(String typeArg, boolean canBubbleArg, boolean cancelableArg, AbstractView viewArg, int detailArg)
```

The initUIEvent method is used to initialize the value of
 a UIEvent created through the DocumentEvent
 interface. This method may only be called before the
 UIEvent has been dispatched via the
 dispatchEvent method, though it may be called multiple
 times during that phase if necessary. If called multiple times, the
 final invocation takes precedence.

**参数**

- **typeArg** — Specifies the event type.
- **canBubbleArg** — Specifies whether or not the event can bubble.
- **cancelableArg** — Specifies whether or not the event's default action can be prevented.
- **viewArg** — Specifies the Event's AbstractView.
- **detailArg** — Specifies the Event's detail.
