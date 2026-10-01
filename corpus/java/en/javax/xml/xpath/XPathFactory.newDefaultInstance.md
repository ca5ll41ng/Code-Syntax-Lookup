---
id: "java-en-function-xpathfactory-newdefaultinstance"
language: "java"
lang: "en"
category: "function"
name: "XPathFactory.newDefaultInstance"
signature: "public static XPathFactory newDefaultInstance()"
title: "XPathFactory.newDefaultInstance"
directive: "method"
module: "java.xml/javax.xml.xpath"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/xpath/XPathFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XPathFactory.newDefaultInstance

```java
public static XPathFactory newDefaultInstance()
```

Creates a new instance of the `XPathFactory` builtin
 system-default implementation.

 system-default implementation is only required to support the
 `DEFAULT_OBJECT_MODEL_URI default object model`, the
 `org.w3c.dom W3C DOM`, but may support additional
 object models.

**返回**

- A new instance of the `XPathFactory` builtin system-default implementation.

> *Since 9*
