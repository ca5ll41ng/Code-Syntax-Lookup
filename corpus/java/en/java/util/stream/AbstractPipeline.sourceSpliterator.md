---
id: "java-en-function-abstractpipeline-sourcespliterator"
language: "java"
lang: "en"
category: "function"
name: "AbstractPipeline.sourceSpliterator"
signature: "protected Spliterator<?> sourceSpliterator(int terminalFlags)"
title: "AbstractPipeline.sourceSpliterator"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/AbstractPipeline.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractPipeline.sourceSpliterator

```java
protected Spliterator<?> sourceSpliterator(int terminalFlags)
```

Get the source spliterator for this pipeline stage.  For a sequential or
 stateless parallel pipeline, this is the source spliterator.  For a
 stateful parallel pipeline, this is a spliterator describing the results
 of all computations up to and including the most recent stateful
 operation.
