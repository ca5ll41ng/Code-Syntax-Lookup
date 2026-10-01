---
id: "java-en-function-xmleventreader-nexttag"
language: "java"
lang: "en"
category: "function"
name: "XMLEventReader.nextTag"
signature: "public XMLEvent nextTag() throws XMLStreamException"
title: "XMLEventReader.nextTag"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLEventReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLEventReader.nextTag

```java
public XMLEvent nextTag() throws XMLStreamException
```

Skips any insignificant space events until a START_ELEMENT or
 END_ELEMENT is reached. If anything other than space characters are
 encountered, an exception is thrown. This method should
 be used when processing element-only content because
 the parser is not able to recognize ignorable whitespace if
 the DTD is missing or not interpreted.

**返回**

- a START_ELEMENT or END_ELEMENT

**异常**

- **XMLStreamException** — if anything other than space characters are encountered
