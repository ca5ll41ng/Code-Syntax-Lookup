---
id: "java-en-function-mouseevent-initmouseevent"
language: "java"
lang: "en"
category: "function"
name: "MouseEvent.initMouseEvent"
signature: "public void initMouseEvent(String typeArg, boolean canBubbleArg, boolean cancelableArg, AbstractView viewArg, int detailArg, int screenXArg, int screenYArg, int clientXArg, int clientYArg, boolean ctrlKeyArg, boolean altKeyArg, boolean shiftKeyArg, boolean metaKeyArg, short buttonArg, EventTarget relatedTargetArg)"
title: "MouseEvent.initMouseEvent"
directive: "method"
module: "java.xml/org.w3c.dom.events"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/events/MouseEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MouseEvent.initMouseEvent

```java
public void initMouseEvent(String typeArg, boolean canBubbleArg, boolean cancelableArg, AbstractView viewArg, int detailArg, int screenXArg, int screenYArg, int clientXArg, int clientYArg, boolean ctrlKeyArg, boolean altKeyArg, boolean shiftKeyArg, boolean metaKeyArg, short buttonArg, EventTarget relatedTargetArg)
```

The initMouseEvent method is used to initialize the value
 of a MouseEvent created through the
 DocumentEvent interface. This method may only be called
 before the MouseEvent has been dispatched via the
 dispatchEvent method, though it may be called multiple
 times during that phase if necessary. If called multiple times, the
 final invocation takes precedence.

**参数**

- **typeArg** — Specifies the event type.
- **canBubbleArg** — Specifies whether or not the event can bubble.
- **cancelableArg** — Specifies whether or not the event's default action can be prevented.
- **viewArg** — Specifies the Event's AbstractView.
- **detailArg** — Specifies the Event's mouse click count.
- **screenXArg** — Specifies the Event's screen x coordinate
- **screenYArg** — Specifies the Event's screen y coordinate
- **clientXArg** — Specifies the Event's client x coordinate
- **clientYArg** — Specifies the Event's client y coordinate
- **ctrlKeyArg** — Specifies whether or not control key was depressed during the Event.
- **altKeyArg** — Specifies whether or not alt key was depressed during the Event.
- **shiftKeyArg** — Specifies whether or not shift key was depressed during the Event.
- **metaKeyArg** — Specifies whether or not meta key was depressed during the Event.
- **buttonArg** — Specifies the Event's mouse button.
- **relatedTargetArg** — Specifies the Event's related EventTarget.
