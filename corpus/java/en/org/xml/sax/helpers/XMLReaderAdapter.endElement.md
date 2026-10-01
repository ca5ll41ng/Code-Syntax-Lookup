---
id: "java-en-function-xmlreaderadapter-endelement"
language: "java"
lang: "en"
category: "function"
name: "XMLReaderAdapter.endElement"
signature: "public void endElement (String uri, String localName, String qName) throws SAXException"
title: "XMLReaderAdapter.endElement"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/XMLReaderAdapter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLReaderAdapter.endElement

```java
public void endElement (String uri, String localName, String qName) throws SAXException
```

Adapt a SAX2 end element event.

**参数**

- **uri** — The Namespace URI.
- **localName** — The Namespace local name.
- **qName** — The qualified (prefixed) name.

**异常**

- **org.xml.sax.SAXException** — The client may raise a processing exception.

**参见**

- org.xml.sax.ContentHandler#endElement
