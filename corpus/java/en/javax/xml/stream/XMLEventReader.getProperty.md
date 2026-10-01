---
id: "java-en-function-xmleventreader-getproperty"
language: "java"
lang: "en"
category: "function"
name: "XMLEventReader.getProperty"
signature: "public Object getProperty(java.lang.String name) throws java.lang.IllegalArgumentException"
title: "XMLEventReader.getProperty"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLEventReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLEventReader.getProperty

```java
public Object getProperty(java.lang.String name) throws java.lang.IllegalArgumentException
```

Get the value of a feature/property from the underlying implementation

**参数**

- **name** — The name of the property

**返回**

- The value of the property

**异常**

- **IllegalArgumentException** — if the property is not supported
