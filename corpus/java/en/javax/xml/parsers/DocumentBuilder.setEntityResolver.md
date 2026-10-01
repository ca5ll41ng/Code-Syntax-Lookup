---
id: "java-en-function-documentbuilder-setentityresolver"
language: "java"
lang: "en"
category: "function"
name: "DocumentBuilder.setEntityResolver"
signature: "public abstract void setEntityResolver(EntityResolver er)"
title: "DocumentBuilder.setEntityResolver"
directive: "method"
module: "java.xml/javax.xml.parsers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/parsers/DocumentBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DocumentBuilder.setEntityResolver

```java
public abstract void setEntityResolver(EntityResolver er)
```

Specify the `EntityResolver` to be used to resolve
 entities present in the XML document to be parsed. Setting
 this to null will result in the underlying
 implementation using it's own default implementation and
 behavior.

**参数**

- **er** — The EntityResolver to be used to resolve entities present in the XML document to be parsed.
