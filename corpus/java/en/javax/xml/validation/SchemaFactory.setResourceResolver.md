---
id: "java-en-function-schemafactory-setresourceresolver"
language: "java"
lang: "en"
category: "function"
name: "SchemaFactory.setResourceResolver"
signature: "public abstract void setResourceResolver(LSResourceResolver resourceResolver)"
title: "SchemaFactory.setResourceResolver"
directive: "method"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/SchemaFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SchemaFactory.setResourceResolver

```java
public abstract void setResourceResolver(LSResourceResolver resourceResolver)
```

Sets the `LSResourceResolver` to customize
 resource resolution when parsing schemas.

 

 `SchemaFactory` uses a `LSResourceResolver`
 when it needs to locate external resources while parsing schemas,
 although exactly what constitutes "locating external resources" is
 up to each schema language. For example, for W3C XML Schema,
 this includes files ``d or ``ed,
 and DTD referenced from schema files, etc.

 

 Applications can call this method even during a `Schema`
 is being parsed.

 

 When the `LSResourceResolver` is null, the implementation will
 behave as if the following `LSResourceResolver` is set:
 
```

 class DumbDOMResourceResolver implements `LSResourceResolver` {
     public `org.w3c.dom.ls.LSInput` resolveResource(
         String publicId, String systemId, String baseURI) {

         return null; // always return null
     }
 }
 
```

 

 If a `LSResourceResolver` throws a `RuntimeException`
  (or instances of its derived classes),
 then the `SchemaFactory` will abort the parsing and
 the caller of the `newSchema` method will receive
 the same `RuntimeException`.

 

 When a new `SchemaFactory` object is created, initially
 this field is set to null.  This field will NOT be
 inherited to `Schema`s, `Validator`s, or
 `ValidatorHandler`s that are created from this `SchemaFactory`.

**参数**

- **resourceResolver** — A new resource resolver to be set. This parameter can be null.
