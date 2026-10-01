---
id: "java-en-function-lsresourceresolver-resolveresource"
language: "java"
lang: "en"
category: "function"
name: "LSResourceResolver.resolveResource"
signature: "public LSInput resolveResource(String type, String namespaceURI, String publicId, String systemId, String baseURI)"
title: "LSResourceResolver.resolveResource"
directive: "method"
module: "java.xml/org.w3c.dom.ls"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ls/LSResourceResolver.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LSResourceResolver.resolveResource

```java
public LSInput resolveResource(String type, String namespaceURI, String publicId, String systemId, String baseURI)
```

Allow the application to resolve external resources.
 
 The LSParser will call this method before opening any
 external resource, including the external DTD subset, external
 entities referenced within the DTD, and external entities referenced
 within the document element (however, the top-level document entity
 is not passed to this method). The application may then request that
 the LSParser resolve the external resource itself, that
 it use an alternative URI, or that it use an entirely different input
 source.
 
 Application writers can use this method to redirect external
 system identifiers to secure and/or local URI, to look up public
 identifiers in a catalogue, or to read an entity from a database or
 other input source (including, for example, a dialog box).

**参数**

- **type** — The type of the resource being resolved. For XML [XML 1.0] resources (i.e. entities), applications must use the value "http://www.w3.org/TR/REC-xml". For XML Schema [XML Schema Part 1] , applications must use the value "http://www.w3.org/2001/XMLSchema". Other types of resources are outside the scope of this specification and therefore should recommend an absolute URI in order to use this method.
- **namespaceURI** — The namespace of the resource being resolved, e.g. the target namespace of the XML Schema [XML Schema Part 1] when resolving XML Schema resources.
- **publicId** — The public identifier of the external entity being referenced, or null if no public identifier was supplied or if the resource is not an entity.
- **systemId** — The system identifier, a URI reference [IETF RFC 2396], of the external resource being referenced, or null if no system identifier was supplied.
- **baseURI** — The absolute base URI of the resource being parsed, or null if there is no base URI.

**返回**

- A LSInput object describing the new input source, or null to request that the parser open a regular URI connection to the resource.
