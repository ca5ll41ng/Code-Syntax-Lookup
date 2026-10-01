---
id: "java-en-function-document-getelementbyid"
language: "java"
lang: "en"
category: "function"
name: "Document.getElementById"
signature: "public Element getElementById(String elementId)"
title: "Document.getElementById"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Document.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Document.getElementById

```java
public Element getElementById(String elementId)
```

Returns the Element that has an ID attribute with the
 given value. If no such element exists, this returns null
 . If more than one element has an ID attribute with that value, what
 is returned is undefined.
 
 The DOM implementation is expected to use the attribute
 Attr.isId to determine if an attribute is of type ID.
 

**Note:** Attributes with the name "ID" or "id" are not of type
 ID unless so defined.

**参数**

- **elementId** — The unique id value for an element.

**返回**

- The matching element or null if there is none.

> *Since 1.4, DOM Level 2*
