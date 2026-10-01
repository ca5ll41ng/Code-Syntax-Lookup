---
id: "java-en-function-documentbuilderfactory-getfeature"
language: "java"
lang: "en"
category: "function"
name: "DocumentBuilderFactory.getFeature"
signature: "public abstract boolean getFeature(String name) throws ParserConfigurationException"
title: "DocumentBuilderFactory.getFeature"
directive: "method"
module: "java.xml/javax.xml.parsers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/parsers/DocumentBuilderFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DocumentBuilderFactory.getFeature

```java
public abstract boolean getFeature(String name) throws ParserConfigurationException
```

Get the state of the named feature.

 

 Feature names are fully qualified `java.net.URI`s.
 Implementations may define their own features.
 An `ParserConfigurationException` is thrown if this `DocumentBuilderFactory` or the
 `DocumentBuilder`s it creates cannot support the feature.
 It is possible for an `DocumentBuilderFactory` to expose a feature value but be unable to change its state.

**参数**

- **name** — Feature name.

**返回**

- State of the named feature.

**异常**

- **ParserConfigurationException** — if this `DocumentBuilderFactory` or the `DocumentBuilder`s it creates cannot support this feature.

> *Since 1.5*
