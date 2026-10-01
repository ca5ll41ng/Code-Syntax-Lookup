---
id: "java-en-function-characterdata-getdata"
language: "java"
lang: "en"
category: "function"
name: "CharacterData.getData"
signature: "public String getData() throws DOMException"
title: "CharacterData.getData"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/CharacterData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CharacterData.getData

```java
public String getData() throws DOMException
```

The character data of the node that implements this interface. The DOM
 implementation may not put arbitrary limits on the amount of data
 that may be stored in a CharacterData node. However,
 implementation limits may mean that the entirety of a node's data may
 not fit into a single DOMString. In such cases, the user
 may call substringData to retrieve the data in
 appropriately sized pieces.

**异常**

- **DOMException** — DOMSTRING_SIZE_ERR: Raised when it would return more characters than fit in a DOMString variable on the implementation platform.
