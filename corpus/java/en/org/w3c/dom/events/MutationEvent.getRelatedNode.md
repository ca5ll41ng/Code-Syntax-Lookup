---
id: "java-en-function-mutationevent-getrelatednode"
language: "java"
lang: "en"
category: "function"
name: "MutationEvent.getRelatedNode"
signature: "public Node getRelatedNode()"
title: "MutationEvent.getRelatedNode"
directive: "method"
module: "java.xml/org.w3c.dom.events"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/events/MutationEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MutationEvent.getRelatedNode

```java
public Node getRelatedNode()
```

relatedNode is used to identify a secondary node related
 to a mutation event. For example, if a mutation event is dispatched
 to a node indicating that its parent has changed, the
 relatedNode is the changed parent. If an event is
 instead dispatched to a subtree indicating a node was changed within
 it, the relatedNode is the changed node. In the case of
 the DOMAttrModified event it indicates the Attr node
 which was modified, added, or removed.
