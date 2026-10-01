---
id: "java-en-function-org-xml-sax-helpers-xmlreaderfactory"
language: "java"
lang: "en"
category: "function"
name: "org.xml.sax.helpers.XMLReaderFactory"
title: "XMLReaderFactory"
directive: "type"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/XMLReaderFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLReaderFactory

Factory for creating an XML reader.

 

This class contains static methods for creating an XML reader
 from an explicit class name, or based on runtime defaults:

 
```

 try {
   XMLReader myReader = XMLReaderFactory.createXMLReader();
 } catch (SAXException e) {
   System.err.println(e.getMessage());
 }
 
```

 

**Note to Distributions bundled with parsers:**
 You should modify the implementation of the no-arguments
 createXMLReader to handle cases where the external
 configuration mechanisms aren't set up.  That method should do its
 best to return a parser when one is in the class path, even when
 nothing bound its class name to `org.xml.sax.driver` so
 those configuration mechanisms would see it.

> *Since 1.4, SAX 2.0*

> **⚠ Deprecated** — It is recommended to use `javax.xml.parsers.SAXParserFactory` instead.
