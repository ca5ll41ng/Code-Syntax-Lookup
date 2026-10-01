---
id: "java-en-function-java-lang-invoke-serializedlambda"
language: "java"
lang: "en"
category: "function"
name: "java.lang.invoke.SerializedLambda"
title: "SerializedLambda"
directive: "type"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/SerializedLambda.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SerializedLambda

Serialized form of a lambda expression.  The properties of this class
 represent the information that is present at the lambda factory site, including
 static metafactory arguments such as the identity of the primary functional
 interface method and the identity of the implementation method, as well as
 dynamic metafactory arguments such as values captured from the lexical scope
 at the time of lambda capture.

 

Implementors of serializable lambdas, such as compilers or language
 runtime libraries, are expected to ensure that instances deserialize properly.
 One means to do so is to ensure that the `writeReplace` method returns
 an instance of `SerializedLambda`, rather than allowing default
 serialization to proceed.

 

`SerializedLambda` has a `readResolve` method that looks for
 a (possibly private) static method called
 `$deserializeLambda$(SerializedLambda)` in the capturing class, invokes
 that with itself as the first argument, and returns the result.  Lambda classes
 implementing `$deserializeLambda$` are responsible for validating
 that the properties of the `SerializedLambda` are consistent with a
 lambda actually captured by that class.

 

The identity of a function object produced by deserializing the serialized
 form is unpredictable, and therefore identity-sensitive operations (such as
 reference equality, object locking, and `System.identityHashCode()`) may
 produce different results in different implementations, or even upon
 different deserializations in the same implementation.

**参见**

- LambdaMetafactory

> *Since 1.8*
