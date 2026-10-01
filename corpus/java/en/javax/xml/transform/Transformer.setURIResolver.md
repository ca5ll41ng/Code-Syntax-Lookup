---
id: "java-en-function-transformer-seturiresolver"
language: "java"
lang: "en"
category: "function"
name: "Transformer.setURIResolver"
signature: "public abstract void setURIResolver(URIResolver resolver)"
title: "Transformer.setURIResolver"
directive: "method"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/Transformer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Transformer.setURIResolver

```java
public abstract void setURIResolver(URIResolver resolver)
```

Set an object that will be used to resolve URIs used in
 document().

 

If the resolver argument is null, the URIResolver value will
 be cleared and the transformer will no longer have a resolver.

**参数**

- **resolver** — An object that implements the URIResolver interface, or null.
