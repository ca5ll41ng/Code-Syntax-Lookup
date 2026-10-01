---
id: "java-en-function-elementtraversal-getpreviouselementsibling"
language: "java"
lang: "en"
category: "function"
name: "ElementTraversal.getPreviousElementSibling"
signature: "Element getPreviousElementSibling()"
title: "ElementTraversal.getPreviousElementSibling"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ElementTraversal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ElementTraversal.getPreviousElementSibling

```java
Element getPreviousElementSibling()
```

Returns a reference to the sibling node of the element which most immediately
 precedes the element in document order, and which is of the `Element` type.

**返回**

- a reference to an element child, `null` if the element has no sibling node of the `Element` type that comes before this one.
