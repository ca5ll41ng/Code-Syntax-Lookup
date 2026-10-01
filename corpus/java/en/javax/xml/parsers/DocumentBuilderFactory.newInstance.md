---
id: "java-en-function-documentbuilderfactory-newinstance"
language: "java"
lang: "en"
category: "function"
name: "DocumentBuilderFactory.newInstance"
signature: "public static DocumentBuilderFactory newInstance()"
title: "DocumentBuilderFactory.newInstance"
directive: "method"
module: "java.xml/javax.xml.parsers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/parsers/DocumentBuilderFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DocumentBuilderFactory.newInstance

```java
public static DocumentBuilderFactory newInstance()
```

Obtains a new instance of a `DocumentBuilderFactory`.
 This method uses the
 JAXP Lookup Mechanism
 to determine the `DocumentBuilderFactory` implementation class to load.

 

 Once an application has obtained a reference to a
 `DocumentBuilderFactory`, it can use the factory to
 configure and obtain parser instances.

 Tip for Trouble-shooting
 

 Setting the `jaxp.debug` system property will cause
 this method to print a lot of debug messages
 to `System.err` about what it is doing and where it is looking at.

 

 If you have problems loading `DocumentBuilder`s, try:
 
```

 java -Djaxp.debug=1 YourProgram ....
 
```

**返回**

- New instance of a `DocumentBuilderFactory`

**异常**

- **FactoryConfigurationError** — in case of `java.util.ServiceConfigurationError service configuration error` or if the implementation is not available or cannot be instantiated.
