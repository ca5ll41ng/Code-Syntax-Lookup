---
id: "java-en-function-contenthandler-enddocument"
language: "java"
lang: "en"
category: "function"
name: "ContentHandler.endDocument"
signature: "public void endDocument() throws SAXException"
title: "ContentHandler.endDocument"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ContentHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ContentHandler.endDocument

```java
public void endDocument() throws SAXException
```

Receive notification of the end of a document.

 

 This method is invoked by the parser to signal it has reached the end of
 the document after successfully completing the parsing process.
 After the event, the parser will return the control to the application.

 parsing process with a `SAXException`, in which case, this method
 will never be called. Refer to
 `fatalError`.

**异常**

- **org.xml.sax.SAXException** — any SAX exception, possibly wrapping another exception

**参见**

- #startDocument
