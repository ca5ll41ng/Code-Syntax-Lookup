---
id: "java-en-function-userdatahandler-handle"
language: "java"
lang: "en"
category: "function"
name: "UserDataHandler.handle"
signature: "public void handle(short operation, String key, Object data, Node src, Node dst)"
title: "UserDataHandler.handle"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/UserDataHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UserDataHandler.handle

```java
public void handle(short operation, String key, Object data, Node src, Node dst)
```

This method is called whenever the node for which this handler is
 registered is imported or cloned.
 
 DOM applications must not raise exceptions in a
 UserDataHandler. The effect of throwing exceptions from
 the handler is DOM implementation dependent.

**参数**

- **operation** — Specifies the type of operation that is being performed on the node.
- **key** — Specifies the key for which this handler is being called.
- **data** — Specifies the data for which this handler is being called.
- **src** — Specifies the node being cloned, adopted, imported, or renamed. This is null when the node is being deleted.
- **dst** — Specifies the node newly created if any, or null.
