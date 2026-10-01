---
id: "java-en-function-instrumentation-addtransformer"
language: "java"
lang: "en"
category: "function"
name: "Instrumentation.addTransformer"
signature: "void addTransformer(ClassFileTransformer transformer, boolean canRetransform)"
title: "Instrumentation.addTransformer"
directive: "method"
module: "java.instrument/java.lang.instrument"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.instrument/java/lang/instrument/Instrumentation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Instrumentation.addTransformer

```java
void addTransformer(ClassFileTransformer transformer, boolean canRetransform)
```

Registers the supplied transformer. All future class definitions
 will be seen by the transformer, except definitions of classes upon which any
 registered transformer is dependent.
 The transformer is called when classes are loaded, when they are
 `redefineClasses redefined`. and if canRetransform is true,
 when they are `retransformClasses retransformed`.
 `ClassFileTransformer` defines the order of transform calls.

 If a transformer throws
 an exception during execution, the JVM will still call the other registered
 transformers in order. The same transformer may be added more than once,
 but it is strongly discouraged -- avoid this by creating a new instance of
 transformer class.
 

 This method is intended for use in instrumentation, as described in the
 `Instrumentation class specification`.

**参数**

- **transformer** — the transformer to register
- **canRetransform** — can this transformer's transformations be retransformed

**异常**

- **java.lang.NullPointerException** — if passed a null transformer
- **java.lang.UnsupportedOperationException** — if canRetransform is true and the current configuration of the JVM does not allow retransformation (`isRetransformClassesSupported` is false)

> *Since 1.6*
