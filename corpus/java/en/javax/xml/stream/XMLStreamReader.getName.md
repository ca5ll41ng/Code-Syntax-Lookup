---
id: "java-en-function-xmlstreamreader-getname"
language: "java"
lang: "en"
category: "function"
name: "XMLStreamReader.getName"
signature: "public QName getName()"
title: "XMLStreamReader.getName"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLStreamReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLStreamReader.getName

```java
public QName getName()
```

Returns a QName for the current START_ELEMENT or END_ELEMENT event

**返回**

- the QName for the current START_ELEMENT or END_ELEMENT event

**异常**

- **IllegalStateException** — if this is not a START_ELEMENT or END_ELEMENT
