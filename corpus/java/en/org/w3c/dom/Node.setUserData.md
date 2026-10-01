---
id: "java-en-function-node-setuserdata"
language: "java"
lang: "en"
category: "function"
name: "Node.setUserData"
signature: "public Object setUserData(String key, Object data, UserDataHandler handler)"
title: "Node.setUserData"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Node.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Node.setUserData

```java
public Object setUserData(String key, Object data, UserDataHandler handler)
```

Associate an object to a key on this node. The object can later be
 retrieved from this node by calling getUserData with the
 same key.

**参数**

- **key** — The key to associate the object to.
- **data** — The object to associate to the given key, or null to remove any existing association to that key.
- **handler** — The handler to associate to that key, or null.

**返回**

- Returns the DOMUserData previously associated to the given key on this node, or null if there was none.

> *Since 1.5, DOM Level 3*
