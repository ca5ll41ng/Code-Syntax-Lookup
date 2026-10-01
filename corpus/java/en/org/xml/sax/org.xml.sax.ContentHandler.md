---
id: "java-en-function-org-xml-sax-contenthandler"
language: "java"
lang: "en"
category: "function"
name: "org.xml.sax.ContentHandler"
title: "ContentHandler"
directive: "type"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ContentHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ContentHandler

Receive notification of the logical content of a document.

 

This is the main interface that most SAX applications
 implement: if the application needs to be informed of basic parsing
 events, it implements this interface and registers an instance with
 the SAX parser using the `setContentHandler
 setContentHandler` method.  The parser uses the instance to report
 basic document-related events like the start and end of elements
 and character data.

 

The order of events in this interface is very important, and
 mirrors the order of information in the document itself.  For
 example, all of an element's content (character data, processing
 instructions, and/or subelements) will appear, in order, between
 the startElement event and the corresponding endElement event.

 

This interface is similar to the now-deprecated SAX 1.0
 DocumentHandler interface, but it adds support for Namespaces
 and for reporting skipped entities (in non-validating XML
 processors).

 

Implementors should note that there is also a
 ContentHandler class in the java.net
 package; that means that it's probably a bad idea to do

 
```
import java.net.*;
 import org.xml.sax.*;
 
```

 

In fact, "import ...*" is usually a sign of sloppy programming
 anyway, so the user should consider this a feature rather than a
 bug.

**参见**

- org.xml.sax.XMLReader
- org.xml.sax.DTDHandler
- org.xml.sax.ErrorHandler

> *Since 1.4, SAX 2.0*
