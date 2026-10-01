---
id: "java-en-function-transformerfactory-seterrorlistener"
language: "java"
lang: "en"
category: "function"
name: "TransformerFactory.setErrorListener"
signature: "public abstract void setErrorListener(ErrorListener listener)"
title: "TransformerFactory.setErrorListener"
directive: "method"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/TransformerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TransformerFactory.setErrorListener

```java
public abstract void setErrorListener(ErrorListener listener)
```

Set the error event listener for the TransformerFactory, which
 is used for the processing of transformation instructions,
 and not for the transformation itself.
 An `IllegalArgumentException` is thrown if the
 `ErrorListener` listener is `null`.

**参数**

- **listener** — The new error listener.

**异常**

- **IllegalArgumentException** — When `listener` is `null`
