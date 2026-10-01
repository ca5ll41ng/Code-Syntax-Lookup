---
id: "java-en-function-event-initevent"
language: "java"
lang: "en"
category: "function"
name: "Event.initEvent"
signature: "public void initEvent(String eventTypeArg, boolean canBubbleArg, boolean cancelableArg)"
title: "Event.initEvent"
directive: "method"
module: "java.xml/org.w3c.dom.events"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/events/Event.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Event.initEvent

```java
public void initEvent(String eventTypeArg, boolean canBubbleArg, boolean cancelableArg)
```

The initEvent method is used to initialize the value of an
 Event created through the DocumentEvent
 interface. This method may only be called before the
 Event has been dispatched via the
 dispatchEvent method, though it may be called multiple
 times during that phase if necessary. If called multiple times the
 final invocation takes precedence. If called from a subclass of
 Event interface only the values specified in the
 initEvent method are modified, all other attributes are
 left unchanged.

**参数**

- **eventTypeArg** — Specifies the event type. This type may be any event type currently defined in this specification or a new event type.. The string must be an XML name. Any new event type must not begin with any upper, lower, or mixed case version of the string "DOM". This prefix is reserved for future DOM event sets. It is also strongly recommended that third parties adding their own events use their own prefix to avoid confusion and lessen the probability of conflicts with other new events.
- **canBubbleArg** — Specifies whether or not the event can bubble.
- **cancelableArg** — Specifies whether or not the event's default action can be prevented.
