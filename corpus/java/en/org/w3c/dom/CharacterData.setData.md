---
id: "java-en-function-characterdata-setdata"
language: "java"
lang: "en"
category: "function"
name: "CharacterData.setData"
signature: "public void setData(String data) throws DOMException"
title: "CharacterData.setData"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/CharacterData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CharacterData.setData

```java
public void setData(String data) throws DOMException
```

The character data of the node that implements this interface. The DOM
 implementation may not put arbitrary limits on the amount of data
 that may be stored in a CharacterData node. However,
 implementation limits may mean that the entirety of a node's data may
 not fit into a single DOMString. In such cases, the user
 may call substringData to retrieve the data in
 appropriately sized pieces.

**异常**

- **DOMException** — NO_MODIFICATION_ALLOWED_ERR: Raised when the node is readonly.
