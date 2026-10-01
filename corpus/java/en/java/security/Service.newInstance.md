---
id: "java-en-function-service-newinstance"
language: "java"
lang: "en"
category: "function"
name: "Service.newInstance"
signature: "public Object newInstance(Object constructorParameter) throws NoSuchAlgorithmException"
title: "Service.newInstance"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Provider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Service.newInstance

```java
public Object newInstance(Object constructorParameter) throws NoSuchAlgorithmException
```

Return a new instance of the implementation described by this
 service. The security provider framework uses this method to
 construct implementations. Applications will typically not need
 to call it.

 

The default implementation uses reflection to invoke the
 standard constructor for this type of service.
 Security providers can override this method to implement
 instantiation in a different way.
 For details and the values of constructorParameter that are
 valid for the various types of services see the
 `security_guide_jca
 Java Cryptography Architecture (JCA) Reference Guide`.

**参数**

- **constructorParameter** — the value to pass to the constructor, or `null` if this type of service does not use a constructorParameter.

**返回**

- a new implementation of this service

**异常**

- **InvalidParameterException** — if the value of constructorParameter is invalid for this type of service.
- **NoSuchAlgorithmException** — if instantiation failed for any other reason.
