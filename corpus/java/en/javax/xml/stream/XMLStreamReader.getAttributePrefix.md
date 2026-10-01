---
id: "java-en-function-xmlstreamreader-getattributeprefix"
language: "java"
lang: "en"
category: "function"
name: "XMLStreamReader.getAttributePrefix"
signature: "public String getAttributePrefix(int index)"
title: "XMLStreamReader.getAttributePrefix"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLStreamReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLStreamReader.getAttributePrefix

```java
public String getAttributePrefix(int index)
```

Returns the prefix of this attribute at the
 provided index

**参数**

- **index** — the position of the attribute

**返回**

- the prefix of the attribute

**异常**

- **IllegalStateException** — if this is not a START_ELEMENT or ATTRIBUTE
