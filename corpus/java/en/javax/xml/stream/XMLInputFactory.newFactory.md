---
id: "java-en-function-xmlinputfactory-newfactory"
language: "java"
lang: "en"
category: "function"
name: "XMLInputFactory.newFactory"
signature: "public static XMLInputFactory newFactory() throws FactoryConfigurationError"
title: "XMLInputFactory.newFactory"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLInputFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLInputFactory.newFactory

```java
public static XMLInputFactory newFactory() throws FactoryConfigurationError
```

Creates a new instance of the factory. This method uses the
 JAXP Lookup Mechanism
 to determine the `XMLInputFactory` implementation class to load.
 

 Once an application has obtained a reference to a `XMLInputFactory`, it
 can use the factory to configure and obtain stream instances.

**返回**

- an instance of the `XMLInputFactory`

**异常**

- **FactoryConfigurationError** — in case of `java.util.ServiceConfigurationError service configuration error` or if the implementation is not available or cannot be instantiated.
