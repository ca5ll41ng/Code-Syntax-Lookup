---
id: "java-en-function-lambdaform-shortensignature"
language: "java"
lang: "en"
category: "function"
name: "LambdaForm.shortenSignature"
signature: "public static String shortenSignature(String signature)"
title: "LambdaForm.shortenSignature"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/LambdaForm.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LambdaForm.shortenSignature

```java
public static String shortenSignature(String signature)
```

Hack to make signatures more readable when they show up in method names.
 Signature should start with a sequence of uppercase ASCII letters.
 Runs of three or more are replaced by a single letter plus a decimal repeat count.
 A tail of anything other than uppercase ASCII is passed through unchanged.

**参数**

- **signature** — sequence of uppercase ASCII letters with possible repetitions

**返回**

- same sequence, with repetitions counted by decimal numerals
