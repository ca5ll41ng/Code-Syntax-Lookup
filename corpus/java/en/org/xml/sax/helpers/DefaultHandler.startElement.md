---
id: "java-en-function-defaulthandler-startelement"
language: "java"
lang: "en"
category: "function"
name: "DefaultHandler.startElement"
signature: "public void startElement (String uri, String localName, String qName, Attributes attributes) throws SAXException"
title: "DefaultHandler.startElement"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/DefaultHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DefaultHandler.startElement

```java
public void startElement (String uri, String localName, String qName, Attributes attributes) throws SAXException
```

Receive notification of the start of an element.

 

By default, do nothing.  Application writers may override this
 method in a subclass to take specific actions at the start of
 each element (such as allocating a new tree node or writing
 output to a file).

**参数**

- **uri** — The Namespace URI, or the empty string if the element has no Namespace URI or if Namespace processing is not being performed.
- **localName** — The local name (without prefix), or the empty string if Namespace processing is not being performed.
- **qName** — The qualified name (with prefix), or the empty string if qualified names are not available.
- **attributes** — The attributes attached to the element.  If there are no attributes, it shall be an empty Attributes object.

**异常**

- **org.xml.sax.SAXException** — Any SAX exception, possibly wrapping another exception.

**参见**

- org.xml.sax.ContentHandler#startElement
