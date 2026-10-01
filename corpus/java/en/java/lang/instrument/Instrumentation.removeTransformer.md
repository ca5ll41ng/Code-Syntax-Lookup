---
id: "java-en-function-instrumentation-removetransformer"
language: "java"
lang: "en"
category: "function"
name: "Instrumentation.removeTransformer"
signature: "boolean removeTransformer(ClassFileTransformer transformer)"
title: "Instrumentation.removeTransformer"
directive: "method"
module: "java.instrument/java.lang.instrument"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.instrument/java/lang/instrument/Instrumentation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Instrumentation.removeTransformer

```java
boolean removeTransformer(ClassFileTransformer transformer)
```

Unregisters the supplied transformer. Future class definitions will
 not be shown to the transformer. Removes the most-recently-added matching
 instance of the transformer. Due to the multi-threaded nature of
 class loading, it is possible for a transformer to receive calls
 after it has been removed. Transformers should be written defensively
 to expect this situation.

**参数**

- **transformer** — the transformer to unregister

**返回**

- true if the transformer was found and removed, false if the transformer was not found

**异常**

- **java.lang.NullPointerException** — if passed a null transformer
