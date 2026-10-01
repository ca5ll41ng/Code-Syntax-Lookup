---
id: "java-en-function-lambdaform-prepare"
language: "java"
lang: "en"
category: "function"
name: "LambdaForm.prepare"
signature: "public void prepare()"
title: "LambdaForm.prepare"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/LambdaForm.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LambdaForm.prepare

```java
public void prepare()
```

Make this LF directly executable, as part of a MethodHandle.
 Invariant:  Every MH which is invoked must prepare its LF
 before invocation.
 (In principle, the JVM could do this very lazily,
 as a sort of pre-invocation linkage step.)
