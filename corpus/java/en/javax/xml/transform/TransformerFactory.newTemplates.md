---
id: "java-en-function-transformerfactory-newtemplates"
language: "java"
lang: "en"
category: "function"
name: "TransformerFactory.newTemplates"
signature: "public abstract Templates newTemplates(Source source) throws TransformerConfigurationException"
title: "TransformerFactory.newTemplates"
directive: "method"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/TransformerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TransformerFactory.newTemplates

```java
public abstract Templates newTemplates(Source source) throws TransformerConfigurationException
```

Process the Source into a Templates object, which is a
 a compiled representation of the source. This Templates object
 may then be used concurrently across multiple threads.  Creating
 a Templates object allows the TransformerFactory to do detailed
 performance optimization of transformation instructions, without
 penalizing runtime transformation.

**参数**

- **source** — An object that holds a URL, input stream, etc.

**返回**

- A Templates object capable of being used for transformation purposes, never `null`.

**异常**

- **TransformerConfigurationException** — When parsing to construct the Templates object fails.
