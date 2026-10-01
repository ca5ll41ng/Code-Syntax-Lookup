---
id: "java-en-function-validator-setresourceresolver"
language: "java"
lang: "en"
category: "function"
name: "Validator.setResourceResolver"
signature: "public abstract void setResourceResolver(LSResourceResolver resourceResolver)"
title: "Validator.setResourceResolver"
directive: "method"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/Validator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Validator.setResourceResolver

```java
public abstract void setResourceResolver(LSResourceResolver resourceResolver)
```

Sets the `LSResourceResolver` to customize
 resource resolution while in a validation episode.

 

 `Validator` uses a `LSResourceResolver`
 when it needs to locate external resources while a validation,
 although exactly what constitutes "locating external resources" is
 up to each schema language.

 

 When the `LSResourceResolver` is null, the implementation will
 behave as if the following `LSResourceResolver` is set:
 
```

 class DumbLSResourceResolver implements `LSResourceResolver` {
     public `org.w3c.dom.ls.LSInput` resolveResource(
         String publicId, String systemId, String baseURI) {

         return null; // always return null
     }
 }
 
```

 

 If a `LSResourceResolver` throws a `RuntimeException`
  (or instances of its derived classes),
 then the `Validator` will abort the parsing and
 the caller of the `validate` method will receive
 the same `RuntimeException`.

 

 When a new `Validator` object is created, initially
 this field is set to null.

**参数**

- **resourceResolver** — A new resource resolver to be set. This parameter can be null.
