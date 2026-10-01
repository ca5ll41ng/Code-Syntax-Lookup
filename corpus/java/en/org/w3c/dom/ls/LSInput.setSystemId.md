---
id: "java-en-function-lsinput-setsystemid"
language: "java"
lang: "en"
category: "function"
name: "LSInput.setSystemId"
signature: "public void setSystemId(String systemId)"
title: "LSInput.setSystemId"
directive: "method"
module: "java.xml/org.w3c.dom.ls"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ls/LSInput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LSInput.setSystemId

```java
public void setSystemId(String systemId)
```

The system identifier, a URI reference [IETF RFC 2396], for this
 input source. The system identifier is optional if there is a byte
 stream, a character stream, or string data. It is still useful to
 provide one, since the application will use it to resolve any
 relative URIs and can include it in error messages and warnings. (The
 LSParser will only attempt to fetch the resource identified by the
 URI reference if there is no other input available in the input
 source.)
 
 If the application knows the character encoding of the object
 pointed to by the system identifier, it can set the encoding using
 the encoding attribute.
 
 If the specified system ID is a relative URI reference (see
 section 5 in [IETF RFC 2396]), the DOM
 implementation will attempt to resolve the relative URI with the
 baseURI as the base, if that fails, the behavior is
 implementation dependent.
