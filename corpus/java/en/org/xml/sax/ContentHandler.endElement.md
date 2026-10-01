---
id: "java-en-function-contenthandler-endelement"
language: "java"
lang: "en"
category: "function"
name: "ContentHandler.endElement"
signature: "public void endElement (String uri, String localName, String qName) throws SAXException"
title: "ContentHandler.endElement"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ContentHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ContentHandler.endElement

```java
public void endElement (String uri, String localName, String qName) throws SAXException
```

Receive notification of the end of an element.

 

The SAX parser will invoke this method at the end of every
 element in the XML document; there will be a corresponding
 `startElement startElement` event for every endElement
 event (even when the element is empty).

 

For information on the names, see startElement.

**参数**

- **uri** — the Namespace URI, or the empty string if the element has no Namespace URI or if Namespace processing is not being performed
- **localName** — the local name (without prefix), or the empty string if Namespace processing is not being performed
- **qName** — the qualified XML name (with prefix), or the empty string if qualified names are not available

**异常**

- **org.xml.sax.SAXException** — any SAX exception, possibly wrapping another exception
