---
id: "java-en-function-abstractpipeline-isshortcircuitingpipeline"
language: "java"
lang: "en"
category: "function"
name: "AbstractPipeline.isShortCircuitingPipeline"
signature: "protected final boolean isShortCircuitingPipeline()"
title: "AbstractPipeline.isShortCircuitingPipeline"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/AbstractPipeline.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractPipeline.isShortCircuitingPipeline

```java
protected final boolean isShortCircuitingPipeline()
```

Returns whether any of the stages in the (entire) pipeline is short-circuiting
 or not.

**返回**

- `true` if any stage in this pipeline is short-circuiting, `false` if not.
