---
id: "java-en-function-documenthandler-startelement"
language: "java"
lang: "en"
category: "function"
name: "DocumentHandler.startElement"
signature: "public abstract void startElement (String name, AttributeList atts) throws SAXException"
title: "DocumentHandler.startElement"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/DocumentHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DocumentHandler.startElement

```java
public abstract void startElement (String name, AttributeList atts) throws SAXException
```

Receive notification of the beginning of an element.

 

The Parser will invoke this method at the beginning of every
 element in the XML document; there will be a corresponding
 endElement() event for every startElement() event (even when the
 element is empty). All of the element's content will be
 reported, in order, before the corresponding endElement()
 event.

 

If the element name has a namespace prefix, the prefix will
 still be attached.  Note that the attribute list provided will
 contain only attributes with explicit values (specified or
 defaulted): #IMPLIED attributes will be omitted.

**参数**

- **name** — The element type name.
- **atts** — The attributes attached to the element, if any.

**异常**

- **org.xml.sax.SAXException** — Any SAX exception, possibly wrapping another exception.

**参见**

- #endElement
- org.xml.sax.AttributeList
