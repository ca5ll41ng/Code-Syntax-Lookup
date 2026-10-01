---
id: "java-en-function-transformerhandler-setresult"
language: "java"
lang: "en"
category: "function"
name: "TransformerHandler.setResult"
signature: "public void setResult(Result result) throws IllegalArgumentException"
title: "TransformerHandler.setResult"
directive: "method"
module: "java.xml/javax.xml.transform.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/sax/TransformerHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TransformerHandler.setResult

```java
public void setResult(Result result) throws IllegalArgumentException
```

Set  the Result associated with this
 TransformerHandler to be used for the transformation.

**参数**

- **result** — A Result instance, should not be null.

**异常**

- **IllegalArgumentException** — if result is invalid for some reason.
