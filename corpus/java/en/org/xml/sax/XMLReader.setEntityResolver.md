---
id: "java-en-function-xmlreader-setentityresolver"
language: "java"
lang: "en"
category: "function"
name: "XMLReader.setEntityResolver"
signature: "public void setEntityResolver (EntityResolver resolver)"
title: "XMLReader.setEntityResolver"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/XMLReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLReader.setEntityResolver

```java
public void setEntityResolver (EntityResolver resolver)
```

Allow an application to register an entity resolver.

 

If the application does not register an entity resolver,
 the XMLReader will perform its own default resolution.

 

Applications may register a new or different resolver in the
 middle of a parse, and the SAX parser must begin using the new
 resolver immediately.

**参数**

- **resolver** — The entity resolver.

**参见**

- #getEntityResolver
