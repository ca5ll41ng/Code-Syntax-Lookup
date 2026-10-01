---
id: "java-en-function-documentbuilder-isxincludeaware"
language: "java"
lang: "en"
category: "function"
name: "DocumentBuilder.isXIncludeAware"
signature: "public boolean isXIncludeAware()"
title: "DocumentBuilder.isXIncludeAware"
directive: "method"
module: "java.xml/javax.xml.parsers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/parsers/DocumentBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DocumentBuilder.isXIncludeAware

```java
public boolean isXIncludeAware()
```

Get the XInclude processing mode for this parser.

**返回**

- the return value of the `isXIncludeAware` when this parser was created from factory.

**异常**

- **UnsupportedOperationException** — When implementation does not override this method

**参见**

- DocumentBuilderFactory#setXIncludeAware(boolean)

> *Since 1.5*
