---
id: "java-en-function-abstracttask-getleaftarget"
language: "java"
lang: "en"
category: "function"
name: "AbstractTask.getLeafTarget"
signature: "public static int getLeafTarget()"
title: "AbstractTask.getLeafTarget"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/AbstractTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractTask.getLeafTarget

```java
public static int getLeafTarget()
```

Default target of leaf tasks for parallel decomposition.
 To allow load balancing, we over-partition, currently to approximately
 four tasks per processor, which enables others to help out
 if leaf tasks are uneven or some processors are otherwise busy.
