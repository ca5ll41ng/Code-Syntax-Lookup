---
id: "java-en-function-characterdata-substringdata"
language: "java"
lang: "en"
category: "function"
name: "CharacterData.substringData"
signature: "public String substringData(int offset, int count) throws DOMException"
title: "CharacterData.substringData"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/CharacterData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CharacterData.substringData

```java
public String substringData(int offset, int count) throws DOMException
```

Extracts a range of data from the node.

**参数**

- **offset** — Start offset of substring to extract.
- **count** — The number of 16-bit units to extract.

**返回**

- The specified substring. If the sum of offset and count exceeds the length, then all 16-bit units to the end of the data are returned.

**异常**

- **DOMException** — INDEX_SIZE_ERR: Raised if the specified offset is negative or greater than the number of 16-bit units in data, or if the specified count is negative.  DOMSTRING_SIZE_ERR: Raised if the specified range of text does not fit into a DOMString.
