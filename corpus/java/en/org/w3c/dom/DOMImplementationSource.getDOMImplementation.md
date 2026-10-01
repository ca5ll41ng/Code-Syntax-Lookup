---
id: "java-en-function-domimplementationsource-getdomimplementation"
language: "java"
lang: "en"
category: "function"
name: "DOMImplementationSource.getDOMImplementation"
signature: "public DOMImplementation getDOMImplementation(String features)"
title: "DOMImplementationSource.getDOMImplementation"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/DOMImplementationSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DOMImplementationSource.getDOMImplementation

```java
public DOMImplementation getDOMImplementation(String features)
```

A method to request the first DOM implementation that supports the
 specified features.

**参数**

- **features** — A string that specifies which features and versions are required. This is a space separated list in which each feature is specified by its name optionally followed by a space and a version number.  This method returns the first item of the list returned by getDOMImplementationList.  As an example, the string "XML 3.0 Traversal +Events 2.0" will request a DOM implementation that supports the module "XML" for its 3.0 version, a module that support of the "Traversal" module for any version, and the module "Events" for its 2.0 version. The module "Events" must be accessible using the method Node.getFeature() and DOMImplementation.getFeature().

**返回**

- The first DOM implementation that support the desired features, or null if this source has none.
