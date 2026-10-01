---
id: "java-en-function-characterdata-appenddata"
language: "java"
lang: "en"
category: "function"
name: "CharacterData.appendData"
signature: "public void appendData(String arg) throws DOMException"
title: "CharacterData.appendData"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/CharacterData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CharacterData.appendData

```java
public void appendData(String arg) throws DOMException
```

Append the string to the end of the character data of the node. Upon
 success, data provides access to the concatenation of
 data and the DOMString specified.

**参数**

- **arg** — The DOMString to append.

**异常**

- **DOMException** — NO_MODIFICATION_ALLOWED_ERR: Raised if this node is readonly.
