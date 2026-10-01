---
id: "java-en-function-outputkeys-method"
language: "java"
lang: "en"
category: "function"
name: "OutputKeys.METHOD"
signature: "public static final String METHOD = \"method\""
title: "OutputKeys.METHOD"
directive: "field"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/OutputKeys.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OutputKeys.METHOD

```java
public static final String METHOD = "method"
```

method = "xml" | "html" | "text" | expanded name.

 

The value of the method property identifies the overall method that
 should be used for outputting the result tree.  Other non-namespaced
 values may be used, such as "xhtml", but, if accepted, the handling
 of such values is implementation defined.  If any of the method values
 are not accepted and are not namespace qualified,
 then `setOutputProperty`
 or `setOutputProperties` will
 throw a `java.lang.IllegalArgumentException`.

**参见**

- section 16 of the XSL Transformations (XSLT) W3C Recommendation
