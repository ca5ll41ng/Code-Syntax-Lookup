---
id: "java-en-function-xmlstreamreader-getnamespaceprefix"
language: "java"
lang: "en"
category: "function"
name: "XMLStreamReader.getNamespacePrefix"
signature: "public String getNamespacePrefix(int index)"
title: "XMLStreamReader.getNamespacePrefix"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLStreamReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLStreamReader.getNamespacePrefix

```java
public String getNamespacePrefix(int index)
```

Returns the prefix for the namespace declared at the
 index.  Returns null if this is the default namespace
 declaration

**参数**

- **index** — the position of the namespace declaration

**返回**

- returns the namespace prefix

**异常**

- **IllegalStateException** — if this is not a START_ELEMENT, END_ELEMENT or NAMESPACE
