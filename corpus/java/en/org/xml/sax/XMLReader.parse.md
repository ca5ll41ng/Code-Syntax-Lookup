---
id: "java-en-function-xmlreader-parse"
language: "java"
lang: "en"
category: "function"
name: "XMLReader.parse"
signature: "public void parse (InputSource input) throws IOException, SAXException"
title: "XMLReader.parse"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/XMLReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLReader.parse

```java
public void parse (InputSource input) throws IOException, SAXException
```

Parse an XML document.

 

The application can use this method to instruct the XML
 reader to begin parsing an XML document from any valid input
 source (a character stream, a byte stream, or a URI).

 

Applications may not invoke this method while a parse is in
 progress (they should create a new XMLReader instead for each
 nested XML document).  Once a parse is complete, an
 application may reuse the same XMLReader object, possibly with a
 different input source.
 Configuration of the XMLReader object (such as handler bindings and
 values established for feature flags and properties) is unchanged
 by completion of a parse, unless the definition of that aspect of
 the configuration explicitly specifies other behavior.
 (For example, feature flags or properties exposing
 characteristics of the document being parsed.)
 

 

During the parse, the XMLReader will provide information
 about the XML document through the registered event
 handlers.

 

This method is synchronous: it will not return until parsing
 has ended.  If a client application wants to terminate
 parsing early, it should throw an exception.

**参数**

- **input** — The input source for the top-level of the XML document.

**异常**

- **org.xml.sax.SAXException** — Any SAX exception, possibly wrapping another exception.
- **java.io.IOException** — An IO exception from the parser, possibly from a byte stream or character stream supplied by the application.

**参见**

- org.xml.sax.InputSource
- #parse(java.lang.String)
- #setEntityResolver
- #setDTDHandler
- #setContentHandler
- #setErrorHandler
