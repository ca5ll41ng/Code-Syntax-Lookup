---
id: "java-en-function-node-getuserdata"
language: "java"
lang: "en"
category: "function"
name: "Node.getUserData"
signature: "public Object getUserData(String key)"
title: "Node.getUserData"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Node.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Node.getUserData

```java
public Object getUserData(String key)
```

Retrieves the object associated to a key on a this node. The object
 must first have been set to this node by calling
 setUserData with the same key.

**参数**

- **key** — The key the object is associated to.

**返回**

- Returns the DOMUserData associated to the given key on this node, or null if there was none.

> *Since 1.5, DOM Level 3*
