---
id: "java-en-function-pathelement-sequenceelement"
language: "java"
lang: "en"
category: "function"
name: "PathElement.sequenceElement"
signature: "static PathElement sequenceElement(long index)"
title: "PathElement.sequenceElement"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemoryLayout.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathElement.sequenceElement

```java
static PathElement sequenceElement(long index)
```

{@return a path element which selects the element layout at the specified
          index in a sequence layout}

**参数**

- **index** — the index of the sequence element to be selected

**异常**

- **IllegalArgumentException** — if `index < 0`
