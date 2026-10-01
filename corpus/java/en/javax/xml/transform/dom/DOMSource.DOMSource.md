---
id: "java-en-function-domsource-domsource"
language: "java"
lang: "en"
category: "function"
name: "DOMSource.DOMSource"
signature: "public DOMSource()"
title: "DOMSource.DOMSource"
directive: "method"
module: "java.xml/javax.xml.transform.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/dom/DOMSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DOMSource.DOMSource

```java
public DOMSource()
```

Zero-argument default constructor.  If this constructor is used, and
 no DOM source is set using `setNode` , then the
 Transformer will
 create an empty source `org.w3c.dom.Document` using
 `newDocument`.

**参见**

- javax.xml.transform.Transformer#transform(Source xmlSource, Result outputTarget)
