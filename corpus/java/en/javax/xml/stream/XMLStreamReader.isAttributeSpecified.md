---
id: "java-en-function-xmlstreamreader-isattributespecified"
language: "java"
lang: "en"
category: "function"
name: "XMLStreamReader.isAttributeSpecified"
signature: "public boolean isAttributeSpecified(int index)"
title: "XMLStreamReader.isAttributeSpecified"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLStreamReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLStreamReader.isAttributeSpecified

```java
public boolean isAttributeSpecified(int index)
```

Returns a boolean which indicates if this
 attribute was created by default

**参数**

- **index** — the position of the attribute

**返回**

- true if this is a default attribute

**异常**

- **IllegalStateException** — if this is not a START_ELEMENT or ATTRIBUTE
