---
id: "java-en-function-documenthandler-endelement"
language: "java"
lang: "en"
category: "function"
name: "DocumentHandler.endElement"
signature: "public abstract void endElement (String name) throws SAXException"
title: "DocumentHandler.endElement"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/DocumentHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DocumentHandler.endElement

```java
public abstract void endElement (String name) throws SAXException
```

Receive notification of the end of an element.

 

The SAX parser will invoke this method at the end of every
 element in the XML document; there will be a corresponding
 startElement() event for every endElement() event (even when the
 element is empty).

 

If the element name has a namespace prefix, the prefix will
 still be attached to the name.

**参数**

- **name** — The element type name

**异常**

- **org.xml.sax.SAXException** — Any SAX exception, possibly wrapping another exception.
