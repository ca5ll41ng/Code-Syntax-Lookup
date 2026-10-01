---
id: "java-en-function-transformer-getoutputproperty"
language: "java"
lang: "en"
category: "function"
name: "Transformer.getOutputProperty"
signature: "public abstract String getOutputProperty(String name) throws IllegalArgumentException"
title: "Transformer.getOutputProperty"
directive: "method"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/Transformer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Transformer.getOutputProperty

```java
public abstract String getOutputProperty(String name) throws IllegalArgumentException
```

Get an output property that is in effect for the transformer.

 

If a property has been set using `setOutputProperty`,
 that value will be returned. Otherwise, if a property is explicitly
 specified in the stylesheet, that value will be returned. If
 the value of the property has been defaulted, that is, if no
 value has been set explicitly either with `setOutputProperty` or
 in the stylesheet, the result may vary depending on
 implementation and input stylesheet.

**参数**

- **name** — A non-null String that specifies an output property name, which may be namespace qualified.

**返回**

- The string value of the output property, or null if no property was found.

**异常**

- **IllegalArgumentException** — If the property is not supported.

**参见**

- javax.xml.transform.OutputKeys
