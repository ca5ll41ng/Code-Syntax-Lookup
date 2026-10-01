---
id: "java-en-function-parseradapter-startelement"
language: "java"
lang: "en"
category: "function"
name: "ParserAdapter.startElement"
signature: "public void startElement (String qName, AttributeList qAtts) throws SAXException"
title: "ParserAdapter.startElement"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/ParserAdapter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ParserAdapter.startElement

```java
public void startElement (String qName, AttributeList qAtts) throws SAXException
```

Adapter implementation method; do not call.
 Adapt a SAX1 startElement event.

 

If necessary, perform Namespace processing.

**参数**

- **qName** — The qualified (prefixed) name.
- **qAtts** — The XML attribute list (with qnames).

**异常**

- **SAXException** — The client may raise a processing exception.
