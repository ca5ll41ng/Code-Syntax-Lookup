---
id: "java-en-function-domimplementationsource-getdomimplementationlist"
language: "java"
lang: "en"
category: "function"
name: "DOMImplementationSource.getDOMImplementationList"
signature: "public DOMImplementationList getDOMImplementationList(String features)"
title: "DOMImplementationSource.getDOMImplementationList"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/DOMImplementationSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DOMImplementationSource.getDOMImplementationList

```java
public DOMImplementationList getDOMImplementationList(String features)
```

A method to request a list of DOM implementations that support the
 specified features and versions, as specified in .

**参数**

- **features** — A string that specifies which features and versions are required. This is a space separated list in which each feature is specified by its name optionally followed by a space and a version number. This is something like: "XML 3.0 Traversal +Events 2.0"

**返回**

- A list of DOM implementations that support the desired features.
