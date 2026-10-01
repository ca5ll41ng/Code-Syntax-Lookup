---
id: "java-en-function-xpathfactory-getfeature"
language: "java"
lang: "en"
category: "function"
name: "XPathFactory.getFeature"
signature: "public abstract boolean getFeature(String name) throws XPathFactoryConfigurationException"
title: "XPathFactory.getFeature"
directive: "method"
module: "java.xml/javax.xml.xpath"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/xpath/XPathFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XPathFactory.getFeature

```java
public abstract boolean getFeature(String name) throws XPathFactoryConfigurationException
```

Get the state of the named feature.

 

 Feature names are fully qualified `java.net.URI`s.
 Implementations may define their own features.
 An `XPathFactoryConfigurationException` is thrown if this
 `XPathFactory` or the XPaths
 it creates cannot support the feature.
 It is possible for an `XPathFactory` to expose a feature value
 but be unable to change its state.

**参数**

- **name** — Feature name.

**返回**

- State of the named feature.

**异常**

- **XPathFactoryConfigurationException** — if this `XPathFactory` or the XPaths it creates cannot support this feature.
- **NullPointerException** — if name is null.
