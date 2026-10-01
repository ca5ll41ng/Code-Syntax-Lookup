---
id: "java-en-function-defaulthandler2-resolveentity"
language: "java"
lang: "en"
category: "function"
name: "DefaultHandler2.resolveEntity"
signature: "public InputSource resolveEntity (String name, String publicId, String baseURI, String systemId) throws SAXException, IOException"
title: "DefaultHandler2.resolveEntity"
directive: "method"
module: "java.xml/org.xml.sax.ext"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ext/DefaultHandler2.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DefaultHandler2.resolveEntity

```java
public InputSource resolveEntity (String name, String publicId, String baseURI, String systemId) throws SAXException, IOException
```

Tells the parser to resolve the systemId against the baseURI
 and read the entity text from that resulting absolute URI.
 Note that because the older
 `resolveEntity DefaultHandler.resolveEntity`,
 method is overridden to call this one, this method may sometimes
 be invoked with null name and baseURI, and
 with the systemId already absolutized.
