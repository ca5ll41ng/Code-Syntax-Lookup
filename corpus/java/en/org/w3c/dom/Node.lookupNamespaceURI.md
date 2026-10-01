---
id: "java-en-function-node-lookupnamespaceuri"
language: "java"
lang: "en"
category: "function"
name: "Node.lookupNamespaceURI"
signature: "public String lookupNamespaceURI(String prefix)"
title: "Node.lookupNamespaceURI"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Node.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Node.lookupNamespaceURI

```java
public String lookupNamespaceURI(String prefix)
```

Look up the namespace URI associated to the given prefix, starting from
 this node.
 
See  for details on the algorithm used by this method.

**参数**

- **prefix** — The prefix to look for. If this parameter is null, the method will return the default namespace URI if any.

**返回**

- Returns the associated namespace URI or null if none is found.

> *Since 1.5, DOM Level 3*
