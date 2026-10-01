---
id: "java-en-function-saxtransformerfactory-newxmlfilter"
language: "java"
lang: "en"
category: "function"
name: "SAXTransformerFactory.newXMLFilter"
signature: "public abstract XMLFilter newXMLFilter(Source src) throws TransformerConfigurationException"
title: "SAXTransformerFactory.newXMLFilter"
directive: "method"
module: "java.xml/javax.xml.transform.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/sax/SAXTransformerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SAXTransformerFactory.newXMLFilter

```java
public abstract XMLFilter newXMLFilter(Source src) throws TransformerConfigurationException
```

Create an XMLFilter that uses the given Source as the
 transformation instructions.

**参数**

- **src** — The Source of the transformation instructions.

**返回**

- An XMLFilter object, or null if this feature is not supported.

**异常**

- **TransformerConfigurationException** — If for some reason the TemplatesHandler cannot be created.
