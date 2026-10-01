---
id: "java-en-function-org-xml-sax-attributelist"
language: "java"
lang: "en"
category: "function"
name: "org.xml.sax.AttributeList"
title: "AttributeList"
directive: "type"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/AttributeList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributeList

Interface for an element's attribute specifications.

 

This is the original SAX1 interface for reporting an element's
 attributes.  Unlike the new `org.xml.sax.Attributes Attributes`
 interface, it does not support Namespace-related information.

 

When an attribute list is supplied as part of a
 `startElement startElement`
 event, the list will return valid results only during the
 scope of the event; once the event handler returns control
 to the parser, the attribute list is invalid.  To save a
 persistent copy of the attribute list, use the SAX1
 `org.xml.sax.helpers.AttributeListImpl AttributeListImpl`
 helper class.

 

An attribute list includes only attributes that have been
 specified or defaulted: #IMPLIED attributes will not be included.

 

There are two ways for the SAX application to obtain information
 from the AttributeList.  First, it can iterate through the entire
 list:

 
```
`public void startElement (String name, AttributeList atts) {
   for (int i = 0; i < atts.getLength(); i++) {
     String name = atts.getName(i);
     String type = atts.getType(i);
     String value = atts.getValue(i);
     [...]
   `
 }
 }
```

 

(Note that the result of getLength() will be zero if there
 are no attributes.)

 

As an alternative, the application can request the value or
 type of specific attributes:

 
```

 public void startElement (String name, AttributeList atts) {
   String identifier = atts.getValue("id");
   String label = atts.getValue("label");
   [...]
 }
 
```

**参见**

- org.xml.sax.DocumentHandler#startElement startElement
- org.xml.sax.helpers.AttributeListImpl AttributeListImpl

> *Since 1.4, SAX 1.0*

> **⚠ Deprecated** — This interface has been replaced by the SAX2 `org.xml.sax.Attributes Attributes` interface, which includes Namespace support.
