---
id: "java-en-function-org-xml-sax-inputsource"
language: "java"
lang: "en"
category: "function"
name: "org.xml.sax.InputSource"
title: "InputSource"
directive: "type"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/InputSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InputSource

A single input source for an XML entity.

 

This class allows a SAX application to encapsulate information
 about an input source in a single object, which may include
 a public identifier, a system identifier, a byte stream (possibly
 with a specified encoding), and/or a character stream.

 

There are two places that the application can deliver an
 input source to the parser: as the argument to the Parser.parse
 method, or as the return value of the EntityResolver.resolveEntity
 method.

 

The SAX parser will use the InputSource object to determine how
 to read XML input.  If there is a character stream available, the
 parser will read that stream directly, disregarding any text
 encoding declaration found in that stream.
 If there is no character stream, but there is
 a byte stream, the parser will use that byte stream, using the
 encoding specified in the InputSource or else (if no encoding is
 specified) autodetecting the character encoding using an algorithm
 such as the one in the XML specification.  If neither a character
 stream nor a
 byte stream is available, the parser will attempt to open a URI
 connection to the resource identified by the system
 identifier.

 

An InputSource object belongs to the application: the SAX parser
 shall never modify it in any way (it may modify a copy if
 necessary).  However, standard processing of both byte and
 character streams is to close them on as part of end-of-parse cleanup,
 so applications should not attempt to re-use such streams after they
 have been handed to a parser.

**参见**

- org.xml.sax.XMLReader#parse(org.xml.sax.InputSource)
- org.xml.sax.EntityResolver#resolveEntity
- java.io.InputStream
- java.io.Reader

> *Since 1.4, SAX 1.0*
