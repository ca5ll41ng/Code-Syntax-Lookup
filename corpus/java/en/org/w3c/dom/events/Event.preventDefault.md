---
id: "java-en-function-event-preventdefault"
language: "java"
lang: "en"
category: "function"
name: "Event.preventDefault"
signature: "public void preventDefault()"
title: "Event.preventDefault"
directive: "method"
module: "java.xml/org.w3c.dom.events"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/events/Event.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Event.preventDefault

```java
public void preventDefault()
```

If an event is cancelable, the preventDefault method is
 used to signify that the event is to be canceled, meaning any default
 action normally taken by the implementation as a result of the event
 will not occur. If, during any stage of event flow, the
 preventDefault method is called the event is canceled.
 Any default action associated with the event will not occur. Calling
 this method for a non-cancelable event has no effect. Once
 preventDefault has been called it will remain in effect
 throughout the remainder of the event's propagation. This method may
 be used during any stage of event flow.
