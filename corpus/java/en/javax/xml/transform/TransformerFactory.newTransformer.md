---
id: "java-en-function-transformerfactory-newtransformer"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["xslt"],"params":[0]}
name: "TransformerFactory.newTransformer"
signature: "public abstract Transformer newTransformer(Source source) throws TransformerConfigurationException"
title: "TransformerFactory.newTransformer"
directive: "method"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/TransformerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TransformerFactory.newTransformer

```java
public abstract Transformer newTransformer(Source source) throws TransformerConfigurationException
```

Process the `Source` into a `Transformer`
 `Object`.  The `Source` is an XSLT document that
 conforms to 
 XSL Transformations (XSLT) Version 1.0.  Care must
 be taken not to use this `Transformer` in multiple
 `Thread`s running concurrently.
 Different `TransformerFactories` can be used concurrently by
 different `Thread`s.

**参数**

- **source** — `Source ` of XSLT document used to create `Transformer`. Examples of XML `Source`s include `javax.xml.transform.dom.DOMSource DOMSource`, `javax.xml.transform.sax.SAXSource SAXSource`, and `javax.xml.transform.stream.StreamSource StreamSource`.

**返回**

- A `Transformer` object that may be used to perform a transformation in a single `Thread`, never `null`.

**异常**

- **TransformerConfigurationException** — Thrown if there are errors when parsing the `Source` or it is not possible to create a `Transformer` instance.

**参见**

- XSL Transformations (XSLT) Version 1.0
