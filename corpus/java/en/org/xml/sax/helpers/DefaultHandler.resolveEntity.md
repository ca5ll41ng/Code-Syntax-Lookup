---
id: "java-en-function-defaulthandler-resolveentity"
language: "java"
lang: "en"
category: "function"
name: "DefaultHandler.resolveEntity"
signature: "public InputSource resolveEntity (String publicId, String systemId) throws IOException, SAXException"
title: "DefaultHandler.resolveEntity"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/DefaultHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DefaultHandler.resolveEntity

```java
public InputSource resolveEntity (String publicId, String systemId) throws IOException, SAXException
```

Resolve an external entity.

 

Always return null, so that the parser will use the system
 identifier provided in the XML document.  This method implements
 the SAX default behaviour: application writers can override it
 in a subclass to do special translations such as catalog lookups
 or URI redirection.

**参数**

- **publicId** — The public identifier, or null if none is available.
- **systemId** — The system identifier provided in the XML document.

**返回**

- The new input source, or null to require the default behaviour.

**异常**

- **java.io.IOException** — If there is an error setting up the new input source.
- **org.xml.sax.SAXException** — Any SAX exception, possibly wrapping another exception.

**参见**

- org.xml.sax.EntityResolver#resolveEntity
