---
id: "java-en-function-buffer-reset"
language: "java"
lang: "en"
category: "function"
name: "Buffer.reset"
signature: "public Buffer reset()"
title: "Buffer.reset"
directive: "method"
module: "java.base/java.nio"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/Buffer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Buffer.reset

```java
public Buffer reset()
```

Resets this buffer's position to the previously-marked position.

 

 Invoking this method neither changes nor discards the mark's
 value.

**返回**

- This buffer

**异常**

- **InvalidMarkException** — If the mark has not been set
