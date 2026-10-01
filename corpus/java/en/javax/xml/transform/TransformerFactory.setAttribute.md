---
id: "java-en-function-transformerfactory-setattribute"
language: "java"
lang: "en"
category: "function"
name: "TransformerFactory.setAttribute"
signature: "public abstract void setAttribute(String name, Object value)"
title: "TransformerFactory.setAttribute"
directive: "method"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/TransformerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TransformerFactory.setAttribute

```java
public abstract void setAttribute(String name, Object value)
```

Allows the user to set specific attributes on the underlying
 implementation.  An attribute in this context is defined to
 be an option that the implementation provides.
 An `IllegalArgumentException` is thrown if the underlying
 implementation doesn't recognize the attribute.
 

 All implementations that implement JAXP 1.5 or newer are required to
 support the `ACCESS_EXTERNAL_DTD`  and
 `ACCESS_EXTERNAL_STYLESHEET` properties.

 
   
- 
      

      Access to external DTDs in the source file is restricted to the protocols
      specified by the `ACCESS_EXTERNAL_DTD` property.
      If access is denied during transformation due to the restriction of this property,
      `javax.xml.transform.TransformerException` will be thrown by
      `transform`.

      

      Access to external DTDs in the stylesheet is restricted to the protocols
      specified by the `ACCESS_EXTERNAL_DTD` property.
      If access is denied during the creation of a new transformer due to the
      restriction of this property,
      `javax.xml.transform.TransformerConfigurationException` will be thrown
      by the `newTransformer` method.

      

      Access to external reference set by the stylesheet processing instruction,
      Import and Include element is restricted to the protocols specified by the
      `ACCESS_EXTERNAL_STYLESHEET` property.
      If access is denied during the creation of a new transformer due to the
      restriction of this property,
      `javax.xml.transform.TransformerConfigurationException` will be thrown
      by the `newTransformer` method.

      

      Access to external document through XSLT document function is restricted
      to the protocols specified by the property. If access is denied during
      the transformation due to the restriction of this property,
      `javax.xml.transform.TransformerException` will be thrown by the
      `transform` method.

**参数**

- **name** — The name of the attribute.
- **value** — The value of the attribute.

**异常**

- **IllegalArgumentException** — When implementation does not recognize the attribute.
