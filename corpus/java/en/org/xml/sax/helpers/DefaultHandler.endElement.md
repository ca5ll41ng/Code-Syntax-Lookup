---
id: "java-en-function-defaulthandler-endelement"
language: "java"
lang: "en"
category: "function"
name: "DefaultHandler.endElement"
signature: "public void endElement (String uri, String localName, String qName) throws SAXException"
title: "DefaultHandler.endElement"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/DefaultHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DefaultHandler.endElement

```java
public void endElement (String uri, String localName, String qName) throws SAXException
```

Receive notification of the end of an element.

 

By default, do nothing.  Application writers may override this
 method in a subclass to take specific actions at the end of
 each element (such as finalising a tree node or writing
 output to a file).

**参数**

- **uri** — The Namespace URI, or the empty string if the element has no Namespace URI or if Namespace processing is not being performed.
- **localName** — The local name (without prefix), or the empty string if Namespace processing is not being performed.
- **qName** — The qualified name (with prefix), or the empty string if qualified names are not available.

**异常**

- **org.xml.sax.SAXException** — Any SAX exception, possibly wrapping another exception.

**参见**

- org.xml.sax.ContentHandler#endElement
