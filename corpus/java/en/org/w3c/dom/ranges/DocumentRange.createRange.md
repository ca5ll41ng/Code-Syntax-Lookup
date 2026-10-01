---
id: "java-en-function-documentrange-createrange"
language: "java"
lang: "en"
category: "function"
name: "DocumentRange.createRange"
signature: "public Range createRange()"
title: "DocumentRange.createRange"
directive: "method"
module: "java.xml/org.w3c.dom.ranges"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ranges/DocumentRange.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DocumentRange.createRange

```java
public Range createRange()
```

This interface can be obtained from the object implementing the
 Document interface using binding-specific casting
 methods.

**返回**

- The initial state of the Range returned from this method is such that both of its boundary-points are positioned at the beginning of the corresponding Document, before any content. The Range returned can only be used to select content associated with this Document, or with DocumentFragments and Attrs for which this Document is the ownerDocument.
