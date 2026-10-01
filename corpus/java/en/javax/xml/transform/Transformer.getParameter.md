---
id: "java-en-function-transformer-getparameter"
language: "java"
lang: "en"
category: "function"
name: "Transformer.getParameter"
signature: "public abstract Object getParameter(String name)"
title: "Transformer.getParameter"
directive: "method"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/Transformer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Transformer.getParameter

```java
public abstract Object getParameter(String name)
```

Get a parameter that was explicitly set with setParameter.

 

This method does not return a default parameter value, which
 cannot be determined until the node context is evaluated during
 the transformation process.

**参数**

- **name** — of Object to get

**返回**

- A parameter that has been set with setParameter.
