---
id: "java-en-function-xmlstreamreader-getattributecount"
language: "java"
lang: "en"
category: "function"
name: "XMLStreamReader.getAttributeCount"
signature: "public int getAttributeCount()"
title: "XMLStreamReader.getAttributeCount"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLStreamReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLStreamReader.getAttributeCount

```java
public int getAttributeCount()
```

Returns the count of attributes on this START_ELEMENT,
 this method is only valid on a START_ELEMENT or ATTRIBUTE.  This
 count excludes namespace definitions.  Attribute indices are
 zero-based.

**返回**

- returns the number of attributes

**异常**

- **IllegalStateException** — if this is not a START_ELEMENT or ATTRIBUTE
