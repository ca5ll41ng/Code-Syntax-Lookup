---
id: "java-en-function-templates-getoutputproperties"
language: "java"
lang: "en"
category: "function"
name: "Templates.getOutputProperties"
signature: "Properties getOutputProperties()"
title: "Templates.getOutputProperties"
directive: "method"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/Templates.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Templates.getOutputProperties

```java
Properties getOutputProperties()
```

Get the properties corresponding to the effective xsl:output element.
 The object returned will
 be a clone of the internal values. Accordingly, it can be mutated
 without mutating the Templates object, and then handed in to
 `setOutputProperties`.

 

The properties returned should contain properties set by the stylesheet,
 and these properties are "defaulted" by default properties specified by
 section 16 of the
 XSL Transformations (XSLT) W3C Recommendation.  The properties that
 were specifically set by the stylesheet should be in the base
 Properties list, while the XSLT default properties that were not
 specifically set should be in the "default" Properties list.  Thus,
 getOutputProperties().getProperty(String key) will obtain any
 property in that was set by the stylesheet, or the default
 properties, while
 getOutputProperties().get(String key) will only retrieve properties
 that were explicitly set in the stylesheet.

 

For XSLT,
 Attribute
 Value Templates attribute values will
 be returned unexpanded (since there is no context at this point).  The
 namespace prefixes inside Attribute Value Templates will be unexpanded,
 so that they remain valid XPath values.

**返回**

- A Properties object, never null.
