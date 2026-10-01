---
id: "java-en-function-subject-callas"
language: "java"
lang: "en"
category: "function"
name: "Subject.callAs"
signature: "public static <T> T callAs(final Subject subject, final Callable<T> action) throws CompletionException"
title: "Subject.callAs"
directive: "method"
module: "java.base/javax.security.auth"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/Subject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Subject.callAs

```java
public static <T> T callAs(final Subject subject, final Callable<T> action) throws CompletionException
```

Executes a `Callable` with `subject` as the
 current subject.

 

 This method launches `action` and binds `subject` to the
 period of its execution.

**参数**

- **subject** — the `Subject` that the specified `action` will run as.  This parameter may be `null`.
- **action** — the code to be run with `subject` as its current subject. Must not be `null`.
- **the** — type of value returned by the `call` method of `action`

**返回**

- the value returned by the `call` method of `action`

**异常**

- **NullPointerException** — if `action` is `null`
- **CompletionException** — if `action.call()` throws an exception. The cause of the `CompletionException` is set to the exception thrown by `action.call()`.

**参见**

- #current()

> *Since 18*
