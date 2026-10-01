---
id: "java-en-function-validator-reset"
language: "java"
lang: "en"
category: "function"
name: "Validator.reset"
signature: "public abstract void reset()"
title: "Validator.reset"
directive: "method"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/Validator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Validator.reset

```java
public abstract void reset()
```

Reset this `Validator` to its original configuration.

 

`Validator` is reset to the same state as when it was created with
 `newValidator`.
 `reset()` is designed to allow the reuse of existing `Validator`s
 thus saving resources associated with the creation of new `Validator`s.

 

The reset `Validator` is not guaranteed to have
 the same `LSResourceResolver` or `ErrorHandler`
 `Object`s, e.g. `equals`.
 It is guaranteed to have a functionally equal
 `LSResourceResolver` and `ErrorHandler`.
