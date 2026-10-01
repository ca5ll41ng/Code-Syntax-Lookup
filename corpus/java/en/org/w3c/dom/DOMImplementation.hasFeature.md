---
id: "java-en-function-domimplementation-hasfeature"
language: "java"
lang: "en"
category: "function"
name: "DOMImplementation.hasFeature"
signature: "public boolean hasFeature(String feature, String version)"
title: "DOMImplementation.hasFeature"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/DOMImplementation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DOMImplementation.hasFeature

```java
public boolean hasFeature(String feature, String version)
```

Test if the DOM implementation implements a specific feature and
 version, as specified in DOM Features.

**参数**

- **feature** — The name of the feature to test.
- **version** — This is the version number of the feature to test.

**返回**

- true if the feature is implemented in the specified version, false otherwise.
