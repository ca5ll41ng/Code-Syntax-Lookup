---
id: "java-en-function-schemafactory-getresourceresolver"
language: "java"
lang: "en"
category: "function"
name: "SchemaFactory.getResourceResolver"
signature: "public abstract LSResourceResolver getResourceResolver()"
title: "SchemaFactory.getResourceResolver"
directive: "method"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/SchemaFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SchemaFactory.getResourceResolver

```java
public abstract LSResourceResolver getResourceResolver()
```

Gets the current `LSResourceResolver` set to this `SchemaFactory`.

**返回**

- This method returns the object that was last set through the `setResourceResolver` method, or null if that method has never been called since this `SchemaFactory` has created.

**参见**

- #setErrorHandler(ErrorHandler)
