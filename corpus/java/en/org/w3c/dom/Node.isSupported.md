---
id: "java-en-function-node-issupported"
language: "java"
lang: "en"
category: "function"
name: "Node.isSupported"
signature: "public boolean isSupported(String feature, String version)"
title: "Node.isSupported"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Node.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Node.isSupported

```java
public boolean isSupported(String feature, String version)
```

Tests whether the DOM implementation implements a specific feature and
 that feature is supported by this node, as specified in .

**参数**

- **feature** — The name of the feature to test.
- **version** — This is the version number of the feature to test.

**返回**

- Returns true if the specified feature is supported on this node, false otherwise.

> *Since 1.4, DOM Level 2*
