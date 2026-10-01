---
id: "java-en-function-referencepipeline-referencepipeline"
language: "java"
lang: "en"
category: "function"
name: "ReferencePipeline.ReferencePipeline"
signature: "protected ReferencePipeline(AbstractPipeline<?, P_IN, ?> upupstream, AbstractPipeline<?, P_IN, ?> upstream, int opFlags)"
title: "ReferencePipeline.ReferencePipeline"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/ReferencePipeline.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReferencePipeline.ReferencePipeline

```java
protected ReferencePipeline(AbstractPipeline<?, P_IN, ?> upupstream, AbstractPipeline<?, P_IN, ?> upstream, int opFlags)
```

Constructor for appending an intermediate operation onto an existing
 pipeline.

**参数**

- **upupstream** — the upstream of the upstream element source
- **upstream** — the upstream element source
- **opFlags** — The operation flags for this operation, described in `StreamOpFlag`
