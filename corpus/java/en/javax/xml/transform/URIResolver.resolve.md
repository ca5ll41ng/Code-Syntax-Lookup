---
id: "java-en-function-uriresolver-resolve"
language: "java"
lang: "en"
category: "function"
name: "URIResolver.resolve"
signature: "public Source resolve(String href, String base) throws TransformerException"
title: "URIResolver.resolve"
directive: "method"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/URIResolver.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URIResolver.resolve

```java
public Source resolve(String href, String base) throws TransformerException
```

Called by the processor when it encounters
 an xsl:include, xsl:import, or document() function.

**参数**

- **href** — An href attribute, which may be relative or absolute.
- **base** — The base URI against which the first argument will be made absolute if the absolute URI is required.

**返回**

- A Source object, or null if the href cannot be resolved, and the processor should try to resolve the URI itself.

**异常**

- **TransformerException** — if an error occurs when trying to resolve the URI.
