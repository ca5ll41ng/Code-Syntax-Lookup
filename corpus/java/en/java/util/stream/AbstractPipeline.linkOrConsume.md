---
id: "java-en-function-abstractpipeline-linkorconsume"
language: "java"
lang: "en"
category: "function"
name: "AbstractPipeline.linkOrConsume"
signature: "protected void linkOrConsume()"
title: "AbstractPipeline.linkOrConsume"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/AbstractPipeline.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractPipeline.linkOrConsume

```java
protected void linkOrConsume()
```

Checks that the current stage has not been already linked or consumed,
 and then sets this stage as being linked or consumed.
