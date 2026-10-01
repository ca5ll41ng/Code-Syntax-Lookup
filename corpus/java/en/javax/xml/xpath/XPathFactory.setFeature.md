---
id: "java-en-function-xpathfactory-setfeature"
language: "java"
lang: "en"
category: "function"
name: "XPathFactory.setFeature"
signature: "public abstract void setFeature(String name, boolean value) throws XPathFactoryConfigurationException"
title: "XPathFactory.setFeature"
directive: "method"
module: "java.xml/javax.xml.xpath"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/xpath/XPathFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XPathFactory.setFeature

```java
public abstract void setFeature(String name, boolean value) throws XPathFactoryConfigurationException
```

Sets a feature for this `XPathFactory`. The feature applies to
 `XPath` objects that the `XPathFactory` creates. It has no
 impact on `XPath` objects that are already created.

 

 Feature names are fully qualified `java.net.URI`s.
 Implementations may define their own features.
 An `XPathFactoryConfigurationException` is thrown if this
 `XPathFactory` or the XPaths
 it creates cannot support the feature.
 It is possible for an `XPathFactory` to expose a feature value
 but be unable to change its state.
 

 

 All implementations are required to support the `FEATURE_SECURE_PROCESSING` feature.
 When the feature is true, any reference to  an external function is an error.
 Under these conditions, the implementation must not call the `XPathFunctionResolver`
 and must throw an `XPathFunctionException`.

**参数**

- **name** — Feature name.
- **value** — Is feature state true or false.

**异常**

- **XPathFactoryConfigurationException** — if this `XPathFactory` or the XPaths it creates cannot support this feature.
- **NullPointerException** — if name is null.
