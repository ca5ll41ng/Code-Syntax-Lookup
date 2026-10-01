---
id: "java-en-function-xmloutputfactory-getproperty"
language: "java"
lang: "en"
category: "function"
name: "XMLOutputFactory.getProperty"
signature: "public abstract Object getProperty(java.lang.String name) throws IllegalArgumentException"
title: "XMLOutputFactory.getProperty"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLOutputFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLOutputFactory.getProperty

```java
public abstract Object getProperty(java.lang.String name) throws IllegalArgumentException
```

Get a feature/property on the underlying implementation

**参数**

- **name** — The name of the property

**返回**

- The value of the property

**异常**

- **java.lang.IllegalArgumentException** — if the property is not supported
