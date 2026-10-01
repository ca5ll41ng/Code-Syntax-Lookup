---
id: "java-en-function-xmlresolver-resolveentity"
language: "java"
lang: "en"
category: "function"
name: "XMLResolver.resolveEntity"
signature: "public Object resolveEntity(String publicID, String systemID, String baseURI, String namespace) throws XMLStreamException"
title: "XMLResolver.resolveEntity"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLResolver.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLResolver.resolveEntity

```java
public Object resolveEntity(String publicID, String systemID, String baseURI, String namespace) throws XMLStreamException
```

Retrieves a resource.  This resource can be of the following three return types:
 (1) java.io.InputStream (2) javax.xml.stream.XMLStreamReader (3) java.xml.stream.XMLEventReader.
 If this method returns null the processor will attempt to resolve the entity using its
 default mechanism.

**参数**

- **publicID** — The public identifier of the external entity being referenced, or null if none was supplied.
- **systemID** — The system identifier of the external entity being referenced.
- **baseURI** — Absolute base URI associated with systemId.
- **namespace** — The namespace of the entity to resolve.

**返回**

- The resource requested or null.

**异常**

- **XMLStreamException** — if there was a failure attempting to resolve the resource.
