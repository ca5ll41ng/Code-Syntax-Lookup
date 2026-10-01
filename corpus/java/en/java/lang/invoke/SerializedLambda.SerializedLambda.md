---
id: "java-en-function-serializedlambda-serializedlambda"
language: "java"
lang: "en"
category: "function"
name: "SerializedLambda.SerializedLambda"
signature: "public SerializedLambda(Class<?> capturingClass, String functionalInterfaceClass, String functionalInterfaceMethodName, String functionalInterfaceMethodSignature, int implMethodKind, String implClass, String implMethodName, String implMethodSignature, String instantiatedMethodType, Object[] capturedArgs)"
title: "SerializedLambda.SerializedLambda"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/SerializedLambda.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SerializedLambda.SerializedLambda

```java
public SerializedLambda(Class<?> capturingClass, String functionalInterfaceClass, String functionalInterfaceMethodName, String functionalInterfaceMethodSignature, int implMethodKind, String implClass, String implMethodName, String implMethodSignature, String instantiatedMethodType, Object[] capturedArgs)
```

Create a `SerializedLambda` from the low-level information present
 at the lambda factory site.

**参数**

- **capturingClass** — The class in which the lambda expression appears
- **functionalInterfaceClass** — Name, in slash-delimited form, of static type of the returned lambda object
- **functionalInterfaceMethodName** — Name of the functional interface method for the present at the lambda factory site
- **functionalInterfaceMethodSignature** — Signature of the functional interface method present at the lambda factory site
- **implMethodKind** — Method handle kind for the implementation method
- **implClass** — Name, in slash-delimited form, for the class holding the implementation method
- **implMethodName** — Name of the implementation method
- **implMethodSignature** — Signature of the implementation method
- **instantiatedMethodType** — The signature of the primary functional interface method after type variables are substituted with their instantiation from the capture site
- **capturedArgs** — The dynamic arguments to the lambda factory site, which represent variables captured by the lambda
