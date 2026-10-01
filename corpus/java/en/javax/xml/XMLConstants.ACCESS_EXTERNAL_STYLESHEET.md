---
id: "java-en-function-xmlconstants-access_external_stylesheet"
language: "java"
lang: "en"
category: "function"
name: "XMLConstants.ACCESS_EXTERNAL_STYLESHEET"
signature: "public static final String ACCESS_EXTERNAL_STYLESHEET = \"http://javax.xml.XMLConstants/property/accessExternalStylesheet\""
title: "XMLConstants.ACCESS_EXTERNAL_STYLESHEET"
directive: "field"
module: "java.xml/javax.xml"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/XMLConstants.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLConstants.ACCESS_EXTERNAL_STYLESHEET

```java
public static final String ACCESS_EXTERNAL_STYLESHEET = "http://javax.xml.XMLConstants/property/accessExternalStylesheet"
```

Property: accessExternalStylesheet

 

 Restrict access to the protocols specified for external references set by the
 stylesheet processing instruction, Import and Include element, and document function.
 If access is denied due to the restriction of this property, a runtime exception
 that is specific to the context is thrown. In the case of constructing new
 `javax.xml.transform.Transformer` for example,
 `javax.xml.transform.TransformerConfigurationException`
 will be thrown by the `javax.xml.transform.TransformerFactory`.

 

 **Value: ** as defined in the class description.

 

 **System Property:** `javax.xml.accessExternalStylesheet`

 

 **Configuration File:**
 Yes. The property can be set in the
 configuration file.

> *Since 1.7*
