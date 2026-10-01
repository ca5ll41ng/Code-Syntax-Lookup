---
id: "java-en-function-saxparserfactory-setxincludeaware"
language: "java"
lang: "en"
category: "function"
name: "SAXParserFactory.setXIncludeAware"
signature: "public void setXIncludeAware(final boolean state)"
title: "SAXParserFactory.setXIncludeAware"
directive: "method"
module: "java.xml/javax.xml.parsers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/parsers/SAXParserFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SAXParserFactory.setXIncludeAware

```java
public void setXIncludeAware(final boolean state)
```

Set state of XInclude processing.

 

If XInclude markup is found in the document instance, should it be
 processed as specified in 
 XML Inclusions (XInclude) Version 1.0.

 

XInclude processing defaults to `false`.

**参数**

- **state** — Set XInclude processing to `true` or `false`

**异常**

- **UnsupportedOperationException** — When implementation does not override this method

> *Since 1.5*
