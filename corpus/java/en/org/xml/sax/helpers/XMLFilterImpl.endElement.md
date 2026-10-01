---
id: "java-en-function-xmlfilterimpl-endelement"
language: "java"
lang: "en"
category: "function"
name: "XMLFilterImpl.endElement"
signature: "public void endElement (String uri, String localName, String qName) throws SAXException"
title: "XMLFilterImpl.endElement"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/XMLFilterImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLFilterImpl.endElement

```java
public void endElement (String uri, String localName, String qName) throws SAXException
```

Filter an end element event.

**参数**

- **uri** — The element's Namespace URI, or the empty string.
- **localName** — The element's local name, or the empty string.
- **qName** — The element's qualified (prefixed) name, or the empty string.

**异常**

- **org.xml.sax.SAXException** — The client may throw an exception during processing.
