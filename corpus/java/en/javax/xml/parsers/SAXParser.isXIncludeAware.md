---
id: "java-en-function-saxparser-isxincludeaware"
language: "java"
lang: "en"
category: "function"
name: "SAXParser.isXIncludeAware"
signature: "public boolean isXIncludeAware()"
title: "SAXParser.isXIncludeAware"
directive: "method"
module: "java.xml/javax.xml.parsers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/parsers/SAXParser.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SAXParser.isXIncludeAware

```java
public boolean isXIncludeAware()
```

Get the XInclude processing mode for this parser.

**返回**

- the return value of the `isXIncludeAware` when this parser was created from factory.

**异常**

- **UnsupportedOperationException** — When implementation does not override this method

**参见**

- SAXParserFactory#setXIncludeAware(boolean)

> *Since 1.5*
