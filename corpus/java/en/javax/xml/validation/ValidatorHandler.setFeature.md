---
id: "java-en-function-validatorhandler-setfeature"
language: "java"
lang: "en"
category: "function"
name: "ValidatorHandler.setFeature"
signature: "public void setFeature(String name, boolean value) throws SAXNotRecognizedException, SAXNotSupportedException"
title: "ValidatorHandler.setFeature"
directive: "method"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/ValidatorHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ValidatorHandler.setFeature

```java
public void setFeature(String name, boolean value) throws SAXNotRecognizedException, SAXNotSupportedException
```

Set a feature for this ValidatorHandler.

 

Feature can be used to control the way a
 `ValidatorHandler` parses schemas. The feature name is
 any fully-qualified URI. It is possible for a
 `SchemaFactory` to
 expose a feature value but to be unable to change the current
 value. Some feature values may be immutable or mutable only in
 specific contexts, such as before, during, or after a
 validation.

 

All implementations are required to support the `FEATURE_SECURE_PROCESSING` feature.
 When the feature is:
 
   
- 
     true: the implementation will limit XML processing to conform to implementation limits.
     Examples include entity expansion limits and XML Schema constructs that would consume large amounts of resources.
     If XML processing is limited for security reasons, it will be reported via a call to the registered
    `fatalError`.
     See `setErrorHandler`.
   
   
- 
     false: the implementation will processing XML according to the XML specifications without
     regard to possible implementation limits.

**参数**

- **name** — The feature name, which is a non-null fully-qualified URI.
- **value** — The requested value of the feature (true or false).

**异常**

- **SAXNotRecognizedException** — If the feature value can't be assigned or retrieved.
- **SAXNotSupportedException** — When the `ValidatorHandler` recognizes the feature name but cannot set the requested value.
- **NullPointerException** — When name is null.

**参见**

- #getFeature(String)
