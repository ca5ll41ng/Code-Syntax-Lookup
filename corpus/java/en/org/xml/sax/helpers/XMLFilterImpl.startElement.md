---
id: "java-en-function-xmlfilterimpl-startelement"
language: "java"
lang: "en"
category: "function"
name: "XMLFilterImpl.startElement"
signature: "public void startElement (String uri, String localName, String qName, Attributes atts) throws SAXException"
title: "XMLFilterImpl.startElement"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/XMLFilterImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLFilterImpl.startElement

```java
public void startElement (String uri, String localName, String qName, Attributes atts) throws SAXException
```

Filter a start element event.

**参数**

- **uri** — The element's Namespace URI, or the empty string.
- **localName** — The element's local name, or the empty string.
- **qName** — The element's qualified (prefixed) name, or the empty string.
- **atts** — The element's attributes.

**异常**

- **org.xml.sax.SAXException** — The client may throw an exception during processing.
