---
id: "java-en-function-xmlstreamreader-getattributevalue"
language: "java"
lang: "en"
category: "function"
name: "XMLStreamReader.getAttributeValue"
signature: "public String getAttributeValue(String namespaceURI, String localName)"
title: "XMLStreamReader.getAttributeValue"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLStreamReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLStreamReader.getAttributeValue

```java
public String getAttributeValue(String namespaceURI, String localName)
```

Returns the normalized attribute value of the
 attribute with the namespace and localName
 If the namespaceURI is null the namespace
 is not checked for equality

**参数**

- **namespaceURI** — the namespace of the attribute
- **localName** — the local name of the attribute, cannot be null

**返回**

- returns the value of the attribute , returns null if not found

**异常**

- **IllegalStateException** — if this is not a START_ELEMENT or ATTRIBUTE
