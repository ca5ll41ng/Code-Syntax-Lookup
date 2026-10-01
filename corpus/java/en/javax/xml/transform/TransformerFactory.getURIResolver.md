---
id: "java-en-function-transformerfactory-geturiresolver"
language: "java"
lang: "en"
category: "function"
name: "TransformerFactory.getURIResolver"
signature: "public abstract URIResolver getURIResolver()"
title: "TransformerFactory.getURIResolver"
directive: "method"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/TransformerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TransformerFactory.getURIResolver

```java
public abstract URIResolver getURIResolver()
```

Get the object that is used by default during the transformation
 to resolve URIs used in document(), xsl:import, or xsl:include.

**返回**

- The URIResolver that was set with setURIResolver.
