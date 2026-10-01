---
id: "java-en-function-serializedlambda-getinstantiatedmethodtype"
language: "java"
lang: "en"
category: "function"
name: "SerializedLambda.getInstantiatedMethodType"
signature: "public final String getInstantiatedMethodType()"
title: "SerializedLambda.getInstantiatedMethodType"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/SerializedLambda.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SerializedLambda.getInstantiatedMethodType

```java
public final String getInstantiatedMethodType()
```

Get the signature of the primary functional interface method
 after type variables are substituted with their instantiation
 from the capture site.

**返回**

- the signature of the primary functional interface method after type variable processing
