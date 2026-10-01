---
id: "java-en-function-mutationevent-initmutationevent"
language: "java"
lang: "en"
category: "function"
name: "MutationEvent.initMutationEvent"
signature: "public void initMutationEvent(String typeArg, boolean canBubbleArg, boolean cancelableArg, Node relatedNodeArg, String prevValueArg, String newValueArg, String attrNameArg, short attrChangeArg)"
title: "MutationEvent.initMutationEvent"
directive: "method"
module: "java.xml/org.w3c.dom.events"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/events/MutationEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MutationEvent.initMutationEvent

```java
public void initMutationEvent(String typeArg, boolean canBubbleArg, boolean cancelableArg, Node relatedNodeArg, String prevValueArg, String newValueArg, String attrNameArg, short attrChangeArg)
```

The initMutationEvent method is used to initialize the
 value of a MutationEvent created through the
 DocumentEvent interface. This method may only be called
 before the MutationEvent has been dispatched via the
 dispatchEvent method, though it may be called multiple
 times during that phase if necessary. If called multiple times, the
 final invocation takes precedence.

**参数**

- **typeArg** — Specifies the event type.
- **canBubbleArg** — Specifies whether or not the event can bubble.
- **cancelableArg** — Specifies whether or not the event's default action can be prevented.
- **relatedNodeArg** — Specifies the Event's related Node.
- **prevValueArg** — Specifies the Event's prevValue attribute. This value may be null.
- **newValueArg** — Specifies the Event's newValue attribute. This value may be null.
- **attrNameArg** — Specifies the Event's attrName attribute. This value may be null.
- **attrChangeArg** — Specifies the Event's attrChange attribute
