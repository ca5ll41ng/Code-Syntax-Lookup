---
id: "java-en-function-nodeiterator-detach"
language: "java"
lang: "en"
category: "function"
name: "NodeIterator.detach"
signature: "public void detach()"
title: "NodeIterator.detach"
directive: "method"
module: "java.xml/org.w3c.dom.traversal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/traversal/NodeIterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NodeIterator.detach

```java
public void detach()
```

Detaches the NodeIterator from the set which it iterated
 over, releasing any computational resources and placing the
 NodeIterator in the INVALID state. After
 detach has been invoked, calls to nextNode
 or previousNode will raise the exception
 INVALID_STATE_ERR.
