---
id: "java-en-function-xmlinputfactory-setproperty"
language: "java"
lang: "en"
category: "function"
name: "XMLInputFactory.setProperty"
signature: "public abstract void setProperty(java.lang.String name, Object value) throws java.lang.IllegalArgumentException"
title: "XMLInputFactory.setProperty"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLInputFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLInputFactory.setProperty

```java
public abstract void setProperty(java.lang.String name, Object value) throws java.lang.IllegalArgumentException
```

Allows the user to set specific feature/property on the underlying
 implementation. The underlying implementation is not required to support
 every setting of every property in the specification and may use
 IllegalArgumentException to signal that an unsupported property may not be
 set with the specified value.
 

 All implementations that implement JAXP 1.5 or newer are required to
 support the `ACCESS_EXTERNAL_DTD` property.
 
   
- 
        

        Access to external DTDs, external Entity References is restricted to the
        protocols specified by the property. If access is denied during parsing
        due to the restriction of this property, `javax.xml.stream.XMLStreamException`
        will be thrown by the `next` or
        `nextEvent` method.

**参数**

- **name** — The name of the property (may not be null)
- **value** — The value of the property

**异常**

- **java.lang.IllegalArgumentException** — if the property is not supported
