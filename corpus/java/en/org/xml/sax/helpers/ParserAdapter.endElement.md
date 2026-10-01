---
id: "java-en-function-parseradapter-endelement"
language: "java"
lang: "en"
category: "function"
name: "ParserAdapter.endElement"
signature: "public void endElement (String qName) throws SAXException"
title: "ParserAdapter.endElement"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/ParserAdapter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ParserAdapter.endElement

```java
public void endElement (String qName) throws SAXException
```

Adapter implementation method; do not call.
 Adapt a SAX1 end element event.

**参数**

- **qName** — The qualified (prefixed) name.

**异常**

- **SAXException** — The client may raise a processing exception.

**参见**

- org.xml.sax.DocumentHandler#endElement
