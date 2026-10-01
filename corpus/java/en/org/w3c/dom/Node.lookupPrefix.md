---
id: "java-en-function-node-lookupprefix"
language: "java"
lang: "en"
category: "function"
name: "Node.lookupPrefix"
signature: "public String lookupPrefix(String namespaceURI)"
title: "Node.lookupPrefix"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Node.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Node.lookupPrefix

```java
public String lookupPrefix(String namespaceURI)
```

Look up the prefix associated to the given namespace URI, starting from
 this node. The default namespace declarations are ignored by this
 method.
 
See  for details on the algorithm used by this method.

**参数**

- **namespaceURI** — The namespace URI to look for.

**返回**

- Returns an associated namespace prefix if found or null if none is found. If more than one prefix are associated to the namespace prefix, the returned namespace prefix is implementation dependent.

> *Since 1.5, DOM Level 3*
