---
id: "java-en-function-parserfactory-makeparser"
language: "java"
lang: "en"
category: "function"
name: "ParserFactory.makeParser"
signature: "public static org.xml.sax.Parser makeParser () throws ClassNotFoundException, IllegalAccessException, InstantiationException, NullPointerException, ClassCastException"
title: "ParserFactory.makeParser"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/ParserFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ParserFactory.makeParser

```java
public static org.xml.sax.Parser makeParser () throws ClassNotFoundException, IllegalAccessException, InstantiationException, NullPointerException, ClassCastException
```

Create a new SAX parser using the `org.xml.sax.parser' system property.

 

The named class must exist and must implement the
 `org.xml.sax.Parser Parser` interface.

**返回**

- a new SAX parser

**异常**

- **java.lang.NullPointerException** — There is no value for the `org.xml.sax.parser' system property.
- **java.lang.ClassNotFoundException** — The SAX parser class was not found (check your CLASSPATH).
- **IllegalAccessException** — The SAX parser class was found, but you do not have permission to load it.
- **InstantiationException** — The SAX parser class was found but could not be instantiated.
- **java.lang.ClassCastException** — The SAX parser class was found and instantiated, but does not implement org.xml.sax.Parser.

**参见**

- #makeParser(java.lang.String)
- org.xml.sax.Parser
