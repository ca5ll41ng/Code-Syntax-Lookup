---
id: "java-en-function-mouseevent-getrelatedtarget"
language: "java"
lang: "en"
category: "function"
name: "MouseEvent.getRelatedTarget"
signature: "public EventTarget getRelatedTarget()"
title: "MouseEvent.getRelatedTarget"
directive: "method"
module: "java.xml/org.w3c.dom.events"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/events/MouseEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MouseEvent.getRelatedTarget

```java
public EventTarget getRelatedTarget()
```

Used to identify a secondary EventTarget related to a UI
 event. Currently this attribute is used with the mouseover event to
 indicate the EventTarget which the pointing device
 exited and with the mouseout event to indicate the
 EventTarget which the pointing device entered.
