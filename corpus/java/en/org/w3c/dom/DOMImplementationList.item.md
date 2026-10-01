---
id: "java-en-function-domimplementationlist-item"
language: "java"
lang: "en"
category: "function"
name: "DOMImplementationList.item"
signature: "public DOMImplementation item(int index)"
title: "DOMImplementationList.item"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/DOMImplementationList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DOMImplementationList.item

```java
public DOMImplementation item(int index)
```

Returns the indexth item in the collection. If
 index is greater than or equal to the number of
 DOMImplementations in the list, this returns
 null.

**参数**

- **index** — Index into the collection.

**返回**

- The DOMImplementation at the index th position in the DOMImplementationList, or null if that is not a valid index.
