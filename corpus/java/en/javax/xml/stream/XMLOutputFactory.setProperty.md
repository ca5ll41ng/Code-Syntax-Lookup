---
id: "java-en-function-xmloutputfactory-setproperty"
language: "java"
lang: "en"
category: "function"
name: "XMLOutputFactory.setProperty"
signature: "public abstract void setProperty(java.lang.String name, Object value) throws IllegalArgumentException"
title: "XMLOutputFactory.setProperty"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLOutputFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLOutputFactory.setProperty

```java
public abstract void setProperty(java.lang.String name, Object value) throws IllegalArgumentException
```

Allows the user to set specific features/properties on the underlying implementation.

**参数**

- **name** — The name of the property
- **value** — The value of the property

**异常**

- **java.lang.IllegalArgumentException** — if the property is not supported
