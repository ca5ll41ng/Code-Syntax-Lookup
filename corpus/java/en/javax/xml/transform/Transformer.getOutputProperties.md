---
id: "java-en-function-transformer-getoutputproperties"
language: "java"
lang: "en"
category: "function"
name: "Transformer.getOutputProperties"
signature: "public abstract Properties getOutputProperties()"
title: "Transformer.getOutputProperties"
directive: "method"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/Transformer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Transformer.getOutputProperties

```java
public abstract Properties getOutputProperties()
```

Get a copy of the output properties for the transformation.

 

The properties returned should contain properties set by the user,
 and properties set by the stylesheet, and these properties
 are "defaulted" by default properties specified by
 section 16 of the
 XSL Transformations (XSLT) W3C Recommendation.  The properties that
 were specifically set by the user or the stylesheet should be in the base
 Properties list, while the XSLT default properties that were not
 specifically set should be the default Properties list.  Thus,
 getOutputProperties().getProperty(String key) will obtain any
 property in that was set by `setOutputProperty`,
 `setOutputProperties`, in the stylesheet, or the default
 properties, while
 getOutputProperties().get(String key) will only retrieve properties
 that were explicitly set by `setOutputProperty`,
 `setOutputProperties`, or in the stylesheet.

 

Note that mutation of the Properties object returned will not
 effect the properties that the transformer contains.

 

If any of the argument keys are not recognized and are not
 namespace qualified, the property will be ignored and not returned.
 In other words the behaviour is not orthogonal with
 `setOutputProperties setOutputProperties`.

**返回**

- A copy of the set of output properties in effect for the next transformation.

**参见**

- javax.xml.transform.OutputKeys
- java.util.Properties
- XSL Transformations (XSLT) Version 1.0
