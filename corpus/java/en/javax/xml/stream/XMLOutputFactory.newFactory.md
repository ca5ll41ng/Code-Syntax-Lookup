---
id: "java-en-function-xmloutputfactory-newfactory"
language: "java"
lang: "en"
category: "function"
name: "XMLOutputFactory.newFactory"
signature: "public static XMLOutputFactory newFactory() throws FactoryConfigurationError"
title: "XMLOutputFactory.newFactory"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLOutputFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLOutputFactory.newFactory

```java
public static XMLOutputFactory newFactory() throws FactoryConfigurationError
```

Creates a new instance of the factory. This method uses the
 JAXP Lookup Mechanism
 to determine the `XMLOutputFactory` implementation class to load.
 

 Once an application has obtained a reference to a `XMLOutputFactory`, it
 can use the factory to configure and obtain stream instances.

**返回**

- an instance of the `XMLOutputFactory`

**异常**

- **FactoryConfigurationError** — in case of `java.util.ServiceConfigurationError service configuration error` or if the implementation is not available or cannot be instantiated.
