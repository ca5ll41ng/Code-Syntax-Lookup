---
id: "java-en-function-contenthandler-startelement"
language: "java"
lang: "en"
category: "function"
name: "ContentHandler.startElement"
signature: "public void startElement (String uri, String localName, String qName, Attributes atts) throws SAXException"
title: "ContentHandler.startElement"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ContentHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ContentHandler.startElement

```java
public void startElement (String uri, String localName, String qName, Attributes atts) throws SAXException
```

Receive notification of the beginning of an element.

 

The Parser will invoke this method at the beginning of every
 element in the XML document; there will be a corresponding
 `endElement endElement` event for every startElement event
 (even when the element is empty). All of the element's content will be
 reported, in order, before the corresponding endElement
 event.

 

This event allows up to three name components for each
 element:

 
 
- the Namespace URI;
 
- the local name; and
 
- the qualified (prefixed) name.
 

 

Any or all of these may be provided, depending on the
 values of the http://xml.org/sax/features/namespaces
 and the http://xml.org/sax/features/namespace-prefixes
 properties:

 
 
- the Namespace URI and local name are required when
 the namespaces property is true (the default), and are
 optional when the namespaces property is false (if one is
 specified, both must be);
 
- the qualified name is required when the namespace-prefixes property
 is true, and is optional when the namespace-prefixes property
 is false (the default).
 

 

Note that the attribute list provided will contain only
 attributes with explicit values (specified or defaulted):
 #IMPLIED attributes will be omitted.  The attribute list
 will contain attributes used for Namespace declarations
 (xmlns* attributes) only if the
 http://xml.org/sax/features/namespace-prefixes
 property is true (it is false by default, and support for a
 true value is optional).

 

Like `characters characters`, attribute values may have
 characters that need more than one char value.

**参数**

- **uri** — the Namespace URI, or the empty string if the element has no Namespace URI or if Namespace processing is not being performed
- **localName** — the local name (without prefix), or the empty string if Namespace processing is not being performed
- **qName** — the qualified name (with prefix), or the empty string if qualified names are not available
- **atts** — the attributes attached to the element.  If there are no attributes, it shall be an empty Attributes object.  The value of this object after startElement returns is undefined

**异常**

- **org.xml.sax.SAXException** — any SAX exception, possibly wrapping another exception

**参见**

- #endElement
- org.xml.sax.Attributes
- org.xml.sax.helpers.AttributesImpl
