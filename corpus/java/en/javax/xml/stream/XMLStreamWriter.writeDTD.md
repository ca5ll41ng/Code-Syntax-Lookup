---
id: "java-en-function-xmlstreamwriter-writedtd"
language: "java"
lang: "en"
category: "function"
name: "XMLStreamWriter.writeDTD"
signature: "public void writeDTD(String dtd) throws XMLStreamException"
title: "XMLStreamWriter.writeDTD"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLStreamWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLStreamWriter.writeDTD

```java
public void writeDTD(String dtd) throws XMLStreamException
```

Write a DTD section.  This string represents the entire doctypedecl production
 from the XML 1.0 specification.

**参数**

- **dtd** — the DTD to be written

**异常**

- **XMLStreamException** — if an error occurs
