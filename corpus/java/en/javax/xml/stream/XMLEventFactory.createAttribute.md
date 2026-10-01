---
id: "java-en-function-xmleventfactory-createattribute"
language: "java"
lang: "en"
category: "function"
name: "XMLEventFactory.createAttribute"
signature: "public abstract Attribute createAttribute(String prefix, String namespaceURI, String localName, String value)"
title: "XMLEventFactory.createAttribute"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLEventFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLEventFactory.createAttribute

```java
public abstract Attribute createAttribute(String prefix, String namespaceURI, String localName, String value)
```

Create a new Attribute

**参数**

- **prefix** — the prefix of this attribute, may not be null
- **namespaceURI** — the attribute value is set to this value, may not be null
- **localName** — the local name of the XML name of the attribute, localName cannot be null
- **value** — the attribute value to set, may not be null

**返回**

- the Attribute with specified values
