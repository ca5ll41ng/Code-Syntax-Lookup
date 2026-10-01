---
id: "java-en-function-xmlstreamreader-getattributenamespace"
language: "java"
lang: "en"
category: "function"
name: "XMLStreamReader.getAttributeNamespace"
signature: "public String getAttributeNamespace(int index)"
title: "XMLStreamReader.getAttributeNamespace"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLStreamReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLStreamReader.getAttributeNamespace

```java
public String getAttributeNamespace(int index)
```

Returns the namespace of the attribute at the provided
 index

**参数**

- **index** — the position of the attribute

**返回**

- the namespace URI (can be null)

**异常**

- **IllegalStateException** — if this is not a START_ELEMENT or ATTRIBUTE
