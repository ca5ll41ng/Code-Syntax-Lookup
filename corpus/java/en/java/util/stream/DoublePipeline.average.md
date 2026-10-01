---
id: "java-en-function-doublepipeline-average"
language: "java"
lang: "en"
category: "function"
name: "DoublePipeline.average"
signature: "public final OptionalDouble average()"
title: "DoublePipeline.average"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/DoublePipeline.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DoublePipeline.average

```java
public final OptionalDouble average()
```

{@inheritDoc}

 consecutive integers in the range -253 to
 253. If the pipeline has more than 253
 values, the divisor in the average computation will saturate at
 253, leading to additional numerical errors.
