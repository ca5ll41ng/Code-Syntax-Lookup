---
id: "java-en-function-node-getfeature"
language: "java"
lang: "en"
category: "function"
name: "Node.getFeature"
signature: "public Object getFeature(String feature, String version)"
title: "Node.getFeature"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Node.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Node.getFeature

```java
public Object getFeature(String feature, String version)
```

This method returns a specialized object which implements the
 specialized APIs of the specified feature and version, as specified
 in . The specialized object may also be obtained by using
 binding-specific casting methods but is not necessarily expected to,
 as discussed in . This method also allow the implementation to
 provide specialized objects which do not support the Node
  interface.

**参数**

- **feature** — The name of the feature requested. Note that any plus sign "+" prepended to the name of the feature will be ignored since it is not significant in the context of this method.
- **version** — This is the version number of the feature to test.

**返回**

- Returns an object which implements the specialized APIs of the specified feature and version, if any, or null if there is no object which implements interfaces associated with that feature. If the DOMObject returned by this method implements the Node interface, it must delegate to the primary core Node and not return results inconsistent with the primary core Node such as attributes, childNodes, etc.

> *Since 1.5, DOM Level 3*
