---
id: "java-en-function-domstringlist-item"
language: "java"
lang: "en"
category: "function"
name: "DOMStringList.item"
signature: "public String item(int index)"
title: "DOMStringList.item"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/DOMStringList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DOMStringList.item

```java
public String item(int index)
```

Returns the indexth item in the collection. If
 index is greater than or equal to the number of
 DOMStrings in the list, this returns null.

**参数**

- **index** — Index into the collection.

**返回**

- The DOMString at the indexth position in the DOMStringList, or null if that is not a valid index.
