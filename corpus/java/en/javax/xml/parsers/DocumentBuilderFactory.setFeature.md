---
id: "java-en-function-documentbuilderfactory-setfeature"
language: "java"
lang: "en"
category: "function"
name: "DocumentBuilderFactory.setFeature"
signature: "public abstract void setFeature(String name, boolean value) throws ParserConfigurationException"
title: "DocumentBuilderFactory.setFeature"
directive: "method"
module: "java.xml/javax.xml.parsers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/parsers/DocumentBuilderFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DocumentBuilderFactory.setFeature

```java
public abstract void setFeature(String name, boolean value) throws ParserConfigurationException
```

Set a feature for this `DocumentBuilderFactory`
 and `DocumentBuilder`s created by this factory.

 

 Feature names are fully qualified `java.net.URI`s.
 Implementations may define their own features.
 A `ParserConfigurationException` is thrown if this `DocumentBuilderFactory` or the
 `DocumentBuilder`s it creates cannot support the feature.
 It is possible for a `DocumentBuilderFactory` to expose a feature value but be unable to change its state.

 

 All implementations are required to support the `FEATURE_SECURE_PROCESSING` feature.
 When the feature is:
 
   
- 
     `true`: the implementation will limit XML processing to conform to implementation limits.
     Examples include entity expansion limits and XML Schema constructs that would consume large amounts of resources.
     If XML processing is limited for security reasons, it will be reported via a call to the registered
    `fatalError`.
     See `setErrorHandler`.
   
   
- 
     `false`: the implementation will processing XML according to the XML specifications without
     regard to possible implementation limits.

**参数**

- **name** — Feature name.
- **value** — Is feature state `true` or `false`.

**异常**

- **ParserConfigurationException** — if this `DocumentBuilderFactory` or the `DocumentBuilder`s it creates cannot support this feature.
- **NullPointerException** — If the `name` parameter is null.

> *Since 1.5*
