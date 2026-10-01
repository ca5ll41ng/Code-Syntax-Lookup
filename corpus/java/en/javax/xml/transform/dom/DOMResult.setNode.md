---
id: "java-en-function-domresult-setnode"
language: "java"
lang: "en"
category: "function"
name: "DOMResult.setNode"
signature: "public void setNode(Node node)"
title: "DOMResult.setNode"
directive: "method"
module: "java.xml/javax.xml.transform.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/dom/DOMResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DOMResult.setNode

```java
public void setNode(Node node)
```

Set the node that will contain the result DOM tree.

 

In practice, the node should be
 a `org.w3c.dom.Document` node,
 a `org.w3c.dom.DocumentFragment` node, or
 a `org.w3c.dom.Element` node.
 In other words, a node that accepts children.

 

An `IllegalStateException` is thrown if
 `nextSibling` is not `null` and
 `node` is not a parent of `nextSibling`.
 An `IllegalStateException` is thrown if `node` is `null` and
 `nextSibling` is not `null`.

**参数**

- **node** — The node to which the transformation will be appended.

**异常**

- **IllegalStateException** — If `nextSibling` is not `null` and `nextSibling` is not a child of `node` or `node` is `null` and `nextSibling` is not `null`.
