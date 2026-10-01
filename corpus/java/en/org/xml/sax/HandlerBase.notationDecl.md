---
id: "java-en-function-handlerbase-notationdecl"
language: "java"
lang: "en"
category: "function"
name: "HandlerBase.notationDecl"
signature: "public void notationDecl (String name, String publicId, String systemId)"
title: "HandlerBase.notationDecl"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/HandlerBase.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HandlerBase.notationDecl

```java
public void notationDecl (String name, String publicId, String systemId)
```

Receive notification of a notation declaration.

 

By default, do nothing.  Application writers may override this
 method in a subclass if they wish to keep track of the notations
 declared in a document.

**参数**

- **name** — The notation name.
- **publicId** — The notation public identifier, or null if not available.
- **systemId** — The notation system identifier.

**参见**

- org.xml.sax.DTDHandler#notationDecl
