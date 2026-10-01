---
id: "java-en-function-xmlstreamwriter-getproperty"
language: "java"
lang: "en"
category: "function"
name: "XMLStreamWriter.getProperty"
signature: "public Object getProperty(java.lang.String name) throws IllegalArgumentException"
title: "XMLStreamWriter.getProperty"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLStreamWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLStreamWriter.getProperty

```java
public Object getProperty(java.lang.String name) throws IllegalArgumentException
```

Get the value of a feature/property from the underlying implementation

**参数**

- **name** — The name of the property, may not be null

**返回**

- The value of the property

**异常**

- **IllegalArgumentException** — if the property is not supported
- **NullPointerException** — if the name is null
