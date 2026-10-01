---
id: "java-en-function-domimplementationregistry-getdomimplementation"
language: "java"
lang: "en"
category: "function"
name: "DOMImplementationRegistry.getDOMImplementation"
signature: "public DOMImplementation getDOMImplementation(final String features)"
title: "DOMImplementationRegistry.getDOMImplementation"
directive: "method"
module: "java.xml/org.w3c.dom.bootstrap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/bootstrap/DOMImplementationRegistry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DOMImplementationRegistry.getDOMImplementation

```java
public DOMImplementation getDOMImplementation(final String features)
```

Return the first implementation that has the desired
 features, or null if none is found.

**参数**

- **features** — A string that specifies which features are required. This is a space separated list in which each feature is specified by its name optionally followed by a space and a version number. This is something like: "XML 1.0 Traversal +Events 2.0"

**返回**

- An implementation that has the desired features, or null if none found.
