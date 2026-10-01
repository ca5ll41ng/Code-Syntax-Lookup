---
id: "java-en-function-parser-setentityresolver"
language: "java"
lang: "en"
category: "function"
name: "Parser.setEntityResolver"
signature: "public abstract void setEntityResolver (EntityResolver resolver)"
title: "Parser.setEntityResolver"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/Parser.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Parser.setEntityResolver

```java
public abstract void setEntityResolver (EntityResolver resolver)
```

Allow an application to register a custom entity resolver.

 

If the application does not register an entity resolver, the
 SAX parser will resolve system identifiers and open connections
 to entities itself (this is the default behaviour implemented in
 HandlerBase).

 

Applications may register a new or different entity resolver
 in the middle of a parse, and the SAX parser must begin using
 the new resolver immediately.

**参数**

- **resolver** — The object for resolving entities.

**参见**

- EntityResolver
- HandlerBase
