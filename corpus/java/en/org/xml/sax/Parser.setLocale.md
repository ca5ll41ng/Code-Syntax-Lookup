---
id: "java-en-function-parser-setlocale"
language: "java"
lang: "en"
category: "function"
name: "Parser.setLocale"
signature: "public abstract void setLocale (Locale locale) throws SAXException"
title: "Parser.setLocale"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/Parser.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Parser.setLocale

```java
public abstract void setLocale (Locale locale) throws SAXException
```

Allow an application to request a locale for errors and warnings.

 

SAX parsers are not required to provide localisation for errors
 and warnings; if they cannot support the requested locale,
 however, they must throw a SAX exception.  Applications may
 not request a locale change in the middle of a parse.

**参数**

- **locale** — A Java Locale object.

**异常**

- **org.xml.sax.SAXException** — Throws an exception (using the previous or default locale) if the requested locale is not supported.

**参见**

- org.xml.sax.SAXException
- org.xml.sax.SAXParseException
