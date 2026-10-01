---
id: "java-en-function-xmlreaderfactory-createxmlreader"
language: "java"
lang: "en"
category: "function"
name: "XMLReaderFactory.createXMLReader"
signature: "public static XMLReader createXMLReader () throws SAXException"
title: "XMLReaderFactory.createXMLReader"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/XMLReaderFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLReaderFactory.createXMLReader

```java
public static XMLReader createXMLReader () throws SAXException
```

Obtains a new instance of a `org.xml.sax.XMLReader`.
 This method uses the following ordered lookup procedure to find and load
 the `org.xml.sax.XMLReader` implementation class:
 
 
- If the system property `org.xml.sax.driver`
 has a value, that is used as an XMLReader class name. 
 
- 
 Use the service-provider loading facility, defined by the
 `java.util.ServiceLoader` class, to attempt to locate and load an
 implementation of the service `org.xml.sax.XMLReader` by using the
 `getContextClassLoader() current thread's context class loader`.
 If the context class loader is null, the
 `getSystemClassLoader() system class loader` will
 be used.
 
 
- 
 Deprecated. Look for a class name in the `META-INF/services/org.xml.sax.driver`
 file in a jar file available to the runtime.
 
- 
 

 Otherwise, the system-default implementation is returned.
 
 

 The process that looks for a class name in the
 `META-INF/services/org.xml.sax.driver` file in a jar file does not
 conform to the specification of the service-provider loading facility
 as defined in `java.util.ServiceLoader` and therefore does not
 support modularization. It is deprecated as of Java SE 9 and subject to
 removal in a future release.

**返回**

- a new XMLReader.

**异常**

- **org.xml.sax.SAXException** — If no default XMLReader class can be identified and instantiated.

**参见**

- #createXMLReader(java.lang.String)
