---
id: "java-en-function-entityresolver-resolveentity"
language: "java"
lang: "en"
category: "function"
name: "EntityResolver.resolveEntity"
signature: "public abstract InputSource resolveEntity (String publicId, String systemId) throws SAXException, IOException"
title: "EntityResolver.resolveEntity"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/EntityResolver.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EntityResolver.resolveEntity

```java
public abstract InputSource resolveEntity (String publicId, String systemId) throws SAXException, IOException
```

Allow the application to resolve external entities.

 

The parser will call this method before opening any external
 entity except the top-level document entity.  Such entities include
 the external DTD subset and external parameter entities referenced
 within the DTD (in either case, only if the parser reads external
 parameter entities), and external general entities referenced
 within the document element (if the parser reads external general
 entities).  The application may request that the parser locate
 the entity itself, that it use an alternative URI, or that it
 use data provided by the application (as a character or byte
 input stream).

 

Application writers can use this method to redirect external
 system identifiers to secure and/or local URIs, to look up
 public identifiers in a catalogue, or to read an entity from a
 database or other input source (including, for example, a dialog
 box).  Neither XML nor SAX specifies a preferred policy for using
 public or system IDs to resolve resources.  However, SAX specifies
 how to interpret any InputSource returned by this method, and that
 if none is returned, then the system ID will be dereferenced as
 a URL.  

 

If the system identifier is a URL, the SAX parser must
 resolve it fully before reporting it to the application.

**参数**

- **publicId** — The public identifier of the external entity being referenced, or null if none was supplied.
- **systemId** — The system identifier of the external entity being referenced.

**返回**

- An InputSource object describing the new input source, or null to request that the parser open a regular URI connection to the system identifier.

**异常**

- **org.xml.sax.SAXException** — Any SAX exception, possibly wrapping another exception.
- **java.io.IOException** — A Java-specific IO exception, possibly the result of creating a new InputStream or Reader for the InputSource.

**参见**

- org.xml.sax.InputSource
