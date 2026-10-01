---
id: "java-en-function-saxtransformerfactory-newtransformerhandler"
language: "java"
lang: "en"
category: "function"
name: "SAXTransformerFactory.newTransformerHandler"
signature: "public abstract TransformerHandler newTransformerHandler(Source src) throws TransformerConfigurationException"
title: "SAXTransformerFactory.newTransformerHandler"
directive: "method"
module: "java.xml/javax.xml.transform.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/sax/SAXTransformerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SAXTransformerFactory.newTransformerHandler

```java
public abstract TransformerHandler newTransformerHandler(Source src) throws TransformerConfigurationException
```

Get a TransformerHandler object that can process SAX
 ContentHandler events into a Result, based on the transformation
 instructions specified by the argument.

**参数**

- **src** — The Source of the transformation instructions.

**返回**

- TransformerHandler ready to transform SAX events.

**异常**

- **TransformerConfigurationException** — If for some reason the TransformerHandler can not be created.
