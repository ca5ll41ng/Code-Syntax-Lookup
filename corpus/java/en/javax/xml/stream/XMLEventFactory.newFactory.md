---
id: "java-en-function-xmleventfactory-newfactory"
language: "java"
lang: "en"
category: "function"
name: "XMLEventFactory.newFactory"
signature: "public static XMLEventFactory newFactory() throws FactoryConfigurationError"
title: "XMLEventFactory.newFactory"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLEventFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLEventFactory.newFactory

```java
public static XMLEventFactory newFactory() throws FactoryConfigurationError
```

Creates a new instance of the factory. This method uses the
 JAXP Lookup Mechanism
 to determine the `XMLEventFactory` implementation class to load.
 

 Once an application has obtained a reference to a `XMLEventFactory`, it
 can use the factory to configure and obtain stream instances.

**返回**

- an instance of the `XMLEventFactory`

**异常**

- **FactoryConfigurationError** — in case of `java.util.ServiceConfigurationError service configuration error` or if the implementation is not available or cannot be instantiated.
