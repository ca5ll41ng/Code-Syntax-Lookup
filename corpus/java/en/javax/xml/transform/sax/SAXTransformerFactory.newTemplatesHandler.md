---
id: "java-en-function-saxtransformerfactory-newtemplateshandler"
language: "java"
lang: "en"
category: "function"
name: "SAXTransformerFactory.newTemplatesHandler"
signature: "public abstract TemplatesHandler newTemplatesHandler() throws TransformerConfigurationException"
title: "SAXTransformerFactory.newTemplatesHandler"
directive: "method"
module: "java.xml/javax.xml.transform.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/sax/SAXTransformerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SAXTransformerFactory.newTemplatesHandler

```java
public abstract TemplatesHandler newTemplatesHandler() throws TransformerConfigurationException
```

Get a TemplatesHandler object that can process SAX
 ContentHandler events into a Templates object.

**返回**

- A non-null reference to a TransformerHandler, that may be used as a ContentHandler for SAX parse events.

**异常**

- **TransformerConfigurationException** — If for some reason the TemplatesHandler cannot be created.
