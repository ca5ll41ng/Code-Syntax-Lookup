---
id: "java-en-function-documentbuilderfactory-setxincludeaware"
language: "java"
lang: "en"
category: "function"
name: "DocumentBuilderFactory.setXIncludeAware"
signature: "public void setXIncludeAware(final boolean state)"
title: "DocumentBuilderFactory.setXIncludeAware"
directive: "method"
module: "java.xml/javax.xml.parsers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/parsers/DocumentBuilderFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DocumentBuilderFactory.setXIncludeAware

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

- **UnsupportedOperationException** — When implementation does not override this method.

> *Since 1.5*
