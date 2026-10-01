---
id: "java-en-function-characterdata-deletedata"
language: "java"
lang: "en"
category: "function"
name: "CharacterData.deleteData"
signature: "public void deleteData(int offset, int count) throws DOMException"
title: "CharacterData.deleteData"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/CharacterData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CharacterData.deleteData

```java
public void deleteData(int offset, int count) throws DOMException
```

Remove a range of 16-bit units from the node. Upon success,
 data and length reflect the change.

**参数**

- **offset** — The offset from which to start removing.
- **count** — The number of 16-bit units to delete. If the sum of offset and count exceeds length then all 16-bit units from offset to the end of the data are deleted.

**异常**

- **DOMException** — INDEX_SIZE_ERR: Raised if the specified offset is negative or greater than the number of 16-bit units in data, or if the specified count is negative.  NO_MODIFICATION_ALLOWED_ERR: Raised if this node is readonly.
