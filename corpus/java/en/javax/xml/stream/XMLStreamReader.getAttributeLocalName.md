---
id: "java-en-function-xmlstreamreader-getattributelocalname"
language: "java"
lang: "en"
category: "function"
name: "XMLStreamReader.getAttributeLocalName"
signature: "public String getAttributeLocalName(int index)"
title: "XMLStreamReader.getAttributeLocalName"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLStreamReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLStreamReader.getAttributeLocalName

```java
public String getAttributeLocalName(int index)
```

Returns the localName of the attribute at the provided
 index

**参数**

- **index** — the position of the attribute

**返回**

- the localName of the attribute

**异常**

- **IllegalStateException** — if this is not a START_ELEMENT or ATTRIBUTE
