---
id: "java-en-function-parser-parse"
language: "java"
lang: "en"
category: "function"
name: "Parser.parse"
signature: "public abstract void parse (InputSource source) throws SAXException, IOException"
title: "Parser.parse"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/Parser.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Parser.parse

```java
public abstract void parse (InputSource source) throws SAXException, IOException
```

Parse an XML document.

 

The application can use this method to instruct the SAX parser
 to begin parsing an XML document from any valid input
 source (a character stream, a byte stream, or a URI).

 

Applications may not invoke this method while a parse is in
 progress (they should create a new Parser instead for each
 additional XML document).  Once a parse is complete, an
 application may reuse the same Parser object, possibly with a
 different input source.

**参数**

- **source** — The input source for the top-level of the XML document.

**异常**

- **org.xml.sax.SAXException** — Any SAX exception, possibly wrapping another exception.
- **java.io.IOException** — An IO exception from the parser, possibly from a byte stream or character stream supplied by the application.

**参见**

- org.xml.sax.InputSource
- #parse(java.lang.String)
- #setEntityResolver
- #setDTDHandler
- #setDocumentHandler
- #setErrorHandler
