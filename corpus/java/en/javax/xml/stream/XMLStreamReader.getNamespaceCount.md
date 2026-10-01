---
id: "java-en-function-xmlstreamreader-getnamespacecount"
language: "java"
lang: "en"
category: "function"
name: "XMLStreamReader.getNamespaceCount"
signature: "public int getNamespaceCount()"
title: "XMLStreamReader.getNamespaceCount"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLStreamReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLStreamReader.getNamespaceCount

```java
public int getNamespaceCount()
```

Returns the count of namespaces declared on this START_ELEMENT or END_ELEMENT,
 this method is only valid on a START_ELEMENT, END_ELEMENT or NAMESPACE. On
 an END_ELEMENT the count is of the namespaces that are about to go
 out of scope.  This is the equivalent of the information reported
 by SAX callback for an end element event.

**返回**

- returns the number of namespace declarations on this specific element

**异常**

- **IllegalStateException** — if this is not a START_ELEMENT, END_ELEMENT or NAMESPACE
