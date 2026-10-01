---
id: "java-en-function-characterdata-replacedata"
language: "java"
lang: "en"
category: "function"
name: "CharacterData.replaceData"
signature: "public void replaceData(int offset, int count, String arg) throws DOMException"
title: "CharacterData.replaceData"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/CharacterData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CharacterData.replaceData

```java
public void replaceData(int offset, int count, String arg) throws DOMException
```

Replace the characters starting at the specified 16-bit unit offset
 with the specified string.

**参数**

- **offset** — The offset from which to start replacing.
- **count** — The number of 16-bit units to replace. If the sum of offset and count exceeds length, then all 16-bit units to the end of the data are replaced; (i.e., the effect is the same as a remove method call with the same range, followed by an append method invocation).
- **arg** — The DOMString with which the range must be replaced.

**异常**

- **DOMException** — INDEX_SIZE_ERR: Raised if the specified offset is negative or greater than the number of 16-bit units in data, or if the specified count is negative.  NO_MODIFICATION_ALLOWED_ERR: Raised if this node is readonly.
