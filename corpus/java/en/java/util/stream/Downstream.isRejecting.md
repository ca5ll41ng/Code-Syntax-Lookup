---
id: "java-en-function-downstream-isrejecting"
language: "java"
lang: "en"
category: "function"
name: "Downstream.isRejecting"
signature: "default boolean isRejecting()"
title: "Downstream.isRejecting"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Gatherer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Downstream.isRejecting

```java
default boolean isRejecting()
```

Checks whether the next stage is known to not want
 any more elements sent to it.

 should never return `false` again for the same instance.

**返回**

- `true` if this Downstream is known not to want any more elements sent to it, `false` if otherwise
