---
id: "java-en-function-transformer-reset"
language: "java"
lang: "en"
category: "function"
name: "Transformer.reset"
signature: "public void reset()"
title: "Transformer.reset"
directive: "method"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/Transformer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Transformer.reset

```java
public void reset()
```

Reset this Transformer to its original configuration.

 

Transformer is reset to the same state as when it was created with
 `newTransformer`,
 `newTransformer` or
 `newTransformer`.
 reset() is designed to allow the reuse of existing Transformers
 thus saving resources associated with the creation of new Transformers.

 

The reset Transformer is not guaranteed to have the same `URIResolver`
 or `ErrorListener` Objects, e.g. `equals`.
 It is guaranteed to have a functionally equal URIResolver
 and ErrorListener.

**异常**

- **UnsupportedOperationException** — When implementation does not override this method.

> *Since 1.5*
