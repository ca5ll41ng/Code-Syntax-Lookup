---
id: "java-en-function-element-getattributenode"
language: "java"
lang: "en"
category: "function"
name: "Element.getAttributeNode"
signature: "public Attr getAttributeNode(String name)"
title: "Element.getAttributeNode"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Element.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Element.getAttributeNode

```java
public Attr getAttributeNode(String name)
```

Retrieves an attribute node by name.
 
To retrieve an attribute node by qualified name and namespace URI,
 use the getAttributeNodeNS method.

**参数**

- **name** — The name (nodeName) of the attribute to retrieve.

**返回**

- The Attr node with the specified name ( nodeName) or null if there is no such attribute.
