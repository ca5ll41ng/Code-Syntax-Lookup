---
id: "java-en-function-deflater-setstrategy"
language: "java"
lang: "en"
category: "function"
name: "Deflater.setStrategy"
signature: "public void setStrategy(int strategy)"
title: "Deflater.setStrategy"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/Deflater.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Deflater.setStrategy

```java
public void setStrategy(int strategy)
```

Sets the compression strategy to the specified value.

 

 If the compression strategy is changed, the next invocation
 of `deflate` will compress the input available so far with
 the old strategy (and may be flushed); the new strategy will take
 effect only after that invocation.

**参数**

- **strategy** — the new compression strategy

**异常**

- **IllegalArgumentException** — if the compression strategy is invalid
