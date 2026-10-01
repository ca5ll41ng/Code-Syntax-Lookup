---
id: "java-en-function-domimplementationregistry-getdomimplementationlist"
language: "java"
lang: "en"
category: "function"
name: "DOMImplementationRegistry.getDOMImplementationList"
signature: "public DOMImplementationList getDOMImplementationList(final String features)"
title: "DOMImplementationRegistry.getDOMImplementationList"
directive: "method"
module: "java.xml/org.w3c.dom.bootstrap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/bootstrap/DOMImplementationRegistry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DOMImplementationRegistry.getDOMImplementationList

```java
public DOMImplementationList getDOMImplementationList(final String features)
```

Return a list of implementations that support the
 desired features.

**参数**

- **features** — A string that specifies which features are required. This is a space separated list in which each feature is specified by its name optionally followed by a space and a version number. This is something like: "XML 1.0 Traversal +Events 2.0"

**返回**

- A list of DOMImplementations that support the desired features.
