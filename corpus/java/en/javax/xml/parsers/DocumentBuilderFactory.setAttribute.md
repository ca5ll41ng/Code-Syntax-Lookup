---
id: "java-en-function-documentbuilderfactory-setattribute"
language: "java"
lang: "en"
category: "function"
name: "DocumentBuilderFactory.setAttribute"
signature: "public abstract void setAttribute(String name, Object value) throws IllegalArgumentException"
title: "DocumentBuilderFactory.setAttribute"
directive: "method"
module: "java.xml/javax.xml.parsers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/parsers/DocumentBuilderFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DocumentBuilderFactory.setAttribute

```java
public abstract void setAttribute(String name, Object value) throws IllegalArgumentException
```

Allows the user to set specific attributes on the underlying
 implementation.
 

 All implementations that implement JAXP 1.5 or newer are required to
 support the `ACCESS_EXTERNAL_DTD` and
 `ACCESS_EXTERNAL_SCHEMA` properties.

 
   
- 
      Setting the `ACCESS_EXTERNAL_DTD` property
      restricts the access to external DTDs, external Entity References to the
      protocols specified by the property.
      If access is denied during parsing due to the restriction of this property,
      `org.xml.sax.SAXException` will be thrown by the parse methods defined by
      `javax.xml.parsers.DocumentBuilder`.
   
   
- 
      Setting the `ACCESS_EXTERNAL_SCHEMA` property
      restricts the access to external Schema set by the schemaLocation attribute to
      the protocols specified by the property.  If access is denied during parsing
      due to the restriction of this property, `org.xml.sax.SAXException`
      will be thrown by the parse methods defined by
      `javax.xml.parsers.DocumentBuilder`.

**参数**

- **name** — The name of the attribute.
- **value** — The value of the attribute.

**异常**

- **IllegalArgumentException** — thrown if the underlying implementation doesn't recognize the attribute.
