---
id: "java-en-function-outputkeys-version"
language: "java"
lang: "en"
category: "function"
name: "OutputKeys.VERSION"
signature: "public static final String VERSION = \"version\""
title: "OutputKeys.VERSION"
directive: "field"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/OutputKeys.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OutputKeys.VERSION

```java
public static final String VERSION = "version"
```

version = nmtoken.

 

version specifies the version of the output
 method.
 

When the output method is "xml", the version value specifies the
 version of XML to be used for outputting the result tree. The default
 value for the xml output method is 1.0. When the output method is
 "html", the version value indicates the version of the HTML.
 The default value for the xml output method is 4.0, which specifies
 that the result should be output as HTML conforming to the HTML 4.0
 Recommendation [HTML].  If the output method is "text", the version
 property is ignored.

**参见**

- section 16 of the XSL Transformations (XSLT) W3C Recommendation
