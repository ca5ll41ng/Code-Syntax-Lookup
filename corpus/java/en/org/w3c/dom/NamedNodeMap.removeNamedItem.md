---
id: "java-en-function-namednodemap-removenameditem"
language: "java"
lang: "en"
category: "function"
name: "NamedNodeMap.removeNamedItem"
signature: "public Node removeNamedItem(String name) throws DOMException"
title: "NamedNodeMap.removeNamedItem"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/NamedNodeMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamedNodeMap.removeNamedItem

```java
public Node removeNamedItem(String name) throws DOMException
```

Removes a node specified by name. When this map contains the attributes
 attached to an element, if the removed attribute is known to have a
 default value, an attribute immediately appears containing the
 default value as well as the corresponding namespace URI, local name,
 and prefix when applicable.

**参数**

- **name** — The nodeName of the node to remove.

**返回**

- The node removed from this map if a node with such a name exists.

**异常**

- **DOMException** — NOT_FOUND_ERR: Raised if there is no node named name in this map.  NO_MODIFICATION_ALLOWED_ERR: Raised if this map is readonly.
