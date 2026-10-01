---
id: "java-en-function-transformer-transform"
language: "java"
lang: "en"
category: "function"
name: "Transformer.transform"
signature: "public abstract void transform(Source xmlSource, Result outputTarget) throws TransformerException"
title: "Transformer.transform"
directive: "method"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/Transformer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Transformer.transform

```java
public abstract void transform(Source xmlSource, Result outputTarget) throws TransformerException
```

Transform the XML Source to a Result.
 Specific transformation behavior is determined by the settings of the
 TransformerFactory in effect when the
 Transformer was instantiated and any modifications made to
 the Transformer instance.

 

An empty Source is represented as an empty document
 as constructed by `newDocument`.
 The result of transforming an empty Source depends on
 the transformation behavior; it is not always an empty
 Result.

**参数**

- **xmlSource** — The XML input to transform.
- **outputTarget** — The Result of transforming the xmlSource.

**异常**

- **TransformerException** — If an unrecoverable error occurs during the course of the transformation.
