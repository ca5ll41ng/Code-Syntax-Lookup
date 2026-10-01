---
id: "java-en-function-xmlstreamreader-getlocalname"
language: "java"
lang: "en"
category: "function"
name: "XMLStreamReader.getLocalName"
signature: "public String getLocalName()"
title: "XMLStreamReader.getLocalName"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLStreamReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLStreamReader.getLocalName

```java
public String getLocalName()
```

Returns the (local) name of the current event.
 For START_ELEMENT or END_ELEMENT returns the (local) name of the current element.
 For ENTITY_REFERENCE it returns entity name.
 The current event must be START_ELEMENT or END_ELEMENT,
 or ENTITY_REFERENCE

**返回**

- the localName

**异常**

- **IllegalStateException** — if this not a START_ELEMENT, END_ELEMENT or ENTITY_REFERENCE
