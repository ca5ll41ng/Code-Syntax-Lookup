---
id: "java-en-function-saxparserfactory-newinstance"
language: "java"
lang: "en"
category: "function"
name: "SAXParserFactory.newInstance"
signature: "public static SAXParserFactory newInstance()"
title: "SAXParserFactory.newInstance"
directive: "method"
module: "java.xml/javax.xml.parsers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/parsers/SAXParserFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SAXParserFactory.newInstance

```java
public static SAXParserFactory newInstance()
```

Obtains a new instance of a `SAXParserFactory`.
 This method uses the
 JAXP Lookup Mechanism
 to determine the `SAXParserFactory` implementation class to load.

 

 Once an application has obtained a reference to a
 `SAXParserFactory`, it can use the factory to
 configure and obtain parser instances.

 Tip for Trouble-shooting
 

 Setting the `jaxp.debug` system property will cause
 this method to print a lot of debug messages
 to `System.err` about what it is doing and where it is looking at.

 

 If you have problems loading `SAXParser`s, try:
 
```

 java -Djaxp.debug=1 YourProgram ....
 
```

**返回**

- A new instance of a SAXParserFactory.

**异常**

- **FactoryConfigurationError** — in case of `java.util.ServiceConfigurationError service configuration error` or if the implementation is not available or cannot be instantiated.
