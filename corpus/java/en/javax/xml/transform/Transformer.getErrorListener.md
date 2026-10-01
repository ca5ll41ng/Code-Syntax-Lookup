---
id: "java-en-function-transformer-geterrorlistener"
language: "java"
lang: "en"
category: "function"
name: "Transformer.getErrorListener"
signature: "public abstract ErrorListener getErrorListener()"
title: "Transformer.getErrorListener"
directive: "method"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/Transformer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Transformer.getErrorListener

```java
public abstract ErrorListener getErrorListener()
```

Get the error event handler in effect for the transformation.
 Implementations must provide a default error listener.

**返回**

- The current error handler, which should never be null.
