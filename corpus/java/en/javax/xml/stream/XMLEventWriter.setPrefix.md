---
id: "java-en-function-xmleventwriter-setprefix"
language: "java"
lang: "en"
category: "function"
name: "XMLEventWriter.setPrefix"
signature: "public void setPrefix(String prefix, String uri) throws XMLStreamException"
title: "XMLEventWriter.setPrefix"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLEventWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLEventWriter.setPrefix

```java
public void setPrefix(String prefix, String uri) throws XMLStreamException
```

Sets the prefix the uri is bound to.  This prefix is bound
 in the scope of the current START_ELEMENT / END_ELEMENT pair.
 If this method is called before a START_ELEMENT has been written
 the prefix is bound in the root scope.

**参数**

- **prefix** — the prefix to bind to the uri
- **uri** — the uri to bind to the prefix

**异常**

- **XMLStreamException** — if an error occurs
