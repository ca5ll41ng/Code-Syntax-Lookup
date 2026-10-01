---
id: "java-en-function-defaulthandler-notationdecl"
language: "java"
lang: "en"
category: "function"
name: "DefaultHandler.notationDecl"
signature: "public void notationDecl (String name, String publicId, String systemId) throws SAXException"
title: "DefaultHandler.notationDecl"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/DefaultHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DefaultHandler.notationDecl

```java
public void notationDecl (String name, String publicId, String systemId) throws SAXException
```

Receive notification of a notation declaration.

 

By default, do nothing.  Application writers may override this
 method in a subclass if they wish to keep track of the notations
 declared in a document.

**参数**

- **name** — The notation name.
- **publicId** — The notation public identifier, or null if not available.
- **systemId** — The notation system identifier.

**异常**

- **org.xml.sax.SAXException** — Any SAX exception, possibly wrapping another exception.

**参见**

- org.xml.sax.DTDHandler#notationDecl
