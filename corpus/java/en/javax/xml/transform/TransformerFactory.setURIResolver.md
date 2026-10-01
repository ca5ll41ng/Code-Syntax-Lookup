---
id: "java-en-function-transformerfactory-seturiresolver"
language: "java"
lang: "en"
category: "function"
name: "TransformerFactory.setURIResolver"
signature: "public abstract void setURIResolver(URIResolver resolver)"
title: "TransformerFactory.setURIResolver"
directive: "method"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/TransformerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TransformerFactory.setURIResolver

```java
public abstract void setURIResolver(URIResolver resolver)
```

Set an object that is used by default during the transformation
 to resolve URIs used in document(), xsl:import, or xsl:include.

**参数**

- **resolver** — An object that implements the URIResolver interface, or null.
