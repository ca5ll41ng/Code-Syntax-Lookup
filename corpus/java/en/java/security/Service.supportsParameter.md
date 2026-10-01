---
id: "java-en-function-service-supportsparameter"
language: "java"
lang: "en"
category: "function"
name: "Service.supportsParameter"
signature: "public boolean supportsParameter(Object parameter)"
title: "Service.supportsParameter"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Provider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Service.supportsParameter

```java
public boolean supportsParameter(Object parameter)
```

Test whether this Service can use the specified parameter.
 Returns `false` if this service cannot use the parameter.
 Returns `true` if this service can use the parameter,
 if a fast test is infeasible, or if the status is unknown.

 

The security provider framework uses this method with
 some types of services to quickly exclude non-matching
 implementations for consideration.
 Applications will typically not need to call it.

 

For details and the values of parameter that are valid for the
 various types of services see the top of this class and the
 `security_guide_jca
 Java Cryptography Architecture (JCA) Reference Guide`.
 Security providers can override it to implement their own test.

**参数**

- **parameter** — the parameter to test

**返回**

- `false` if this service cannot use the specified parameter; `true` if it can possibly use the parameter

**异常**

- **InvalidParameterException** — if the value of parameter is invalid for this type of service or if this method cannot be used with this type of service
