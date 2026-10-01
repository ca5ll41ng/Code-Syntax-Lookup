---
id: "java-en-function-abstractpipeline-abstractpipeline"
language: "java"
lang: "en"
category: "function"
name: "AbstractPipeline.AbstractPipeline"
signature: "protected AbstractPipeline(AbstractPipeline<?, E_IN, ?> previousPreviousStage, AbstractPipeline<?, E_IN, ?> previousStage, int opFlags)"
title: "AbstractPipeline.AbstractPipeline"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/AbstractPipeline.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractPipeline.AbstractPipeline

```java
protected AbstractPipeline(AbstractPipeline<?, E_IN, ?> previousPreviousStage, AbstractPipeline<?, E_IN, ?> previousStage, int opFlags)
```

Constructor for replacing an intermediate operation stage onto an
 existing pipeline.

**参数**

- **previousPreviousStage** — the upstream pipeline stage of the upstream pipeline stage
- **previousStage** — the upstream pipeline stage
- **opFlags** — the operation flags for the new stage, described in `StreamOpFlag`

**异常**

- **IllegalStateException** — if previousStage is already linked or consumed
