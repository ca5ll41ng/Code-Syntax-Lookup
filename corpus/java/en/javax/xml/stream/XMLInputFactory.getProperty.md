---
id: "java-en-function-xmlinputfactory-getproperty"
language: "java"
lang: "en"
category: "function"
name: "XMLInputFactory.getProperty"
signature: "public abstract Object getProperty(java.lang.String name) throws java.lang.IllegalArgumentException"
title: "XMLInputFactory.getProperty"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLInputFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLInputFactory.getProperty

```java
public abstract Object getProperty(java.lang.String name) throws java.lang.IllegalArgumentException
```

Get the value of a feature/property from the underlying implementation

**参数**

- **name** — The name of the property (may not be null)

**返回**

- The value of the property

**异常**

- **IllegalArgumentException** — if the property is not supported
