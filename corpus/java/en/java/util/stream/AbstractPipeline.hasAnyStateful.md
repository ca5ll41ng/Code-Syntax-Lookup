---
id: "java-en-function-abstractpipeline-hasanystateful"
language: "java"
lang: "en"
category: "function"
name: "AbstractPipeline.hasAnyStateful"
signature: "protected final boolean hasAnyStateful()"
title: "AbstractPipeline.hasAnyStateful"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/AbstractPipeline.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractPipeline.hasAnyStateful

```java
protected final boolean hasAnyStateful()
```

Returns whether any of the stages of the current segment is stateful
 or not.

**返回**

- `true` if any stage in this segment is stateful, `false` if not.
