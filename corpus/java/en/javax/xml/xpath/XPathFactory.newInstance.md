---
id: "java-en-function-xpathfactory-newinstance"
language: "java"
lang: "en"
category: "function"
name: "XPathFactory.newInstance"
signature: "public static XPathFactory newInstance()"
title: "XPathFactory.newInstance"
directive: "method"
module: "java.xml/javax.xml.xpath"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/xpath/XPathFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XPathFactory.newInstance

```java
public static XPathFactory newInstance()
```

Get a new `XPathFactory` instance using the default object model,
 `DEFAULT_OBJECT_MODEL_URI`,
 the W3C DOM.

 

This method is functionally equivalent to:
 
```

   newInstance(DEFAULT_OBJECT_MODEL_URI)
 
```

 

Since the implementation for the W3C DOM is always available, this method will never fail.

**返回**

- Instance of an `XPathFactory`.

**异常**

- **RuntimeException** — When there is a failure in creating an `XPathFactory` for the default object model.
