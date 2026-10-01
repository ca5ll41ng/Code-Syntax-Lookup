---
id: "java-en-function-transformer-seterrorlistener"
language: "java"
lang: "en"
category: "function"
name: "Transformer.setErrorListener"
signature: "public abstract void setErrorListener(ErrorListener listener) throws IllegalArgumentException"
title: "Transformer.setErrorListener"
directive: "method"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/Transformer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Transformer.setErrorListener

```java
public abstract void setErrorListener(ErrorListener listener) throws IllegalArgumentException
```

Set the error event listener in effect for the transformation.

**参数**

- **listener** — The new error listener.

**异常**

- **IllegalArgumentException** — if listener is null.
