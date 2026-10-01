---
id: "java-en-function-org-xml-sax-helpers-attributelistimpl"
language: "java"
lang: "en"
category: "function"
name: "org.xml.sax.helpers.AttributeListImpl"
title: "AttributeListImpl"
directive: "type"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/AttributeListImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributeListImpl

Default implementation for AttributeList.

 

AttributeList implements the deprecated SAX1 `org.xml.sax.AttributeList AttributeList` interface, and has been
 replaced by the new SAX2 `org.xml.sax.helpers.AttributesImpl
 AttributesImpl` interface.

 

This class provides a convenience implementation of the SAX
 `org.xml.sax.AttributeList AttributeList` interface.  This
 implementation is useful both for SAX parser writers, who can use
 it to provide attributes to the application, and for SAX application
 writers, who can use it to create a persistent copy of an element's
 attribute specifications:

 
```

 private AttributeList myatts;

 public void startElement (String name, AttributeList atts)
 {
              // create a persistent copy of the attribute list
              // for use outside this method
   myatts = new AttributeListImpl(atts);
   [...]
 }
 
```

 

Please note that SAX parsers are not required to use this
 class to provide an implementation of AttributeList; it is
 supplied only as an optional convenience.  In particular,
 parser writers are encouraged to invent more efficient
 implementations.

**参见**

- org.xml.sax.AttributeList
- org.xml.sax.DocumentHandler#startElement

> *Since 1.4, SAX 1.0*

> **⚠ Deprecated** — This class implements a deprecated interface, `org.xml.sax.AttributeList AttributeList`; that interface has been replaced by `org.xml.sax.Attributes Attributes`, which is implemented in the `org.xml.sax.helpers.AttributesImpl AttributesImpl` helper class.
