---
id: "java-en-function-staxresult-getxmlstreamwriter"
language: "java"
lang: "en"
category: "function"
name: "StAXResult.getXMLStreamWriter"
signature: "public XMLStreamWriter getXMLStreamWriter()"
title: "StAXResult.getXMLStreamWriter"
directive: "method"
module: "java.xml/javax.xml.transform.stax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/stax/StAXResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StAXResult.getXMLStreamWriter

```java
public XMLStreamWriter getXMLStreamWriter()
```

Get the XMLStreamWriter used by this
 StAXResult.

 

XMLStreamWriter will be null
 if this StAXResult was created with a
 XMLEventWriter.

**返回**

- XMLStreamWriter used by this StAXResult.
