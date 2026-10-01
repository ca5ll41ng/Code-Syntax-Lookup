---
id: "java-en-function-org-xml-sax-parser"
language: "java"
lang: "en"
category: "function"
name: "org.xml.sax.Parser"
title: "Parser"
directive: "type"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/Parser.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Parser

Basic interface for SAX (Simple API for XML) parsers.

 

This was the main event supplier interface for SAX1; it has
 been replaced in SAX2 by `org.xml.sax.XMLReader XMLReader`,
 which includes Namespace support and sophisticated configurability
 and extensibility.

 

All SAX1 parsers must implement this basic interface: it allows
 applications to register handlers for different types of events
 and to initiate a parse from a URI, or a character stream.

 

All SAX1 parsers must also implement a zero-argument constructor
 (though other constructors are also allowed).

 

SAX1 parsers are reusable but not re-entrant: the application
 may reuse a parser object (possibly with a different input source)
 once the first parse has completed successfully, but it may not
 invoke the parse() methods recursively within a parse.

**参见**

- org.xml.sax.EntityResolver
- org.xml.sax.DTDHandler
- org.xml.sax.DocumentHandler
- org.xml.sax.ErrorHandler
- org.xml.sax.HandlerBase
- org.xml.sax.InputSource

> *Since 1.4, SAX 1.0*

> **⚠ Deprecated** — This interface has been replaced by the SAX2 `org.xml.sax.XMLReader XMLReader` interface, which includes Namespace support.
