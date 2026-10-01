---
id: "java-en-function-characterdata-insertdata"
language: "java"
lang: "en"
category: "function"
name: "CharacterData.insertData"
signature: "public void insertData(int offset, String arg) throws DOMException"
title: "CharacterData.insertData"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/CharacterData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CharacterData.insertData

```java
public void insertData(int offset, String arg) throws DOMException
```

Insert a string at the specified 16-bit unit offset.

**参数**

- **offset** — The character offset at which to insert.
- **arg** — The DOMString to insert.

**异常**

- **DOMException** — INDEX_SIZE_ERR: Raised if the specified offset is negative or greater than the number of 16-bit units in data.  NO_MODIFICATION_ALLOWED_ERR: Raised if this node is readonly.
