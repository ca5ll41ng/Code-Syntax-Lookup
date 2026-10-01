---
id: "java-en-function-subject-current"
language: "java"
lang: "en"
category: "function"
name: "Subject.current"
signature: "public static Subject current()"
title: "Subject.current"
directive: "method"
module: "java.base/javax.security.auth"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/Subject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Subject.current

```java
public static Subject current()
```

Returns the current subject.

 

 The current subject is installed by the `callAs` method.
 When `callAs(subject, action)` is called, `action` is
 executed with `subject` as its current subject which can be
 retrieved by this method. After `action` is finished, the current
 subject is reset to its previous value. The current
 subject is `null` before the first call of `callAs()`.

 

 This method returns the
 `Subject` bound to the period of the execution of the current
 thread.

**返回**

- the current subject, or `null` if a current subject is not installed or the current subject is set to `null`.

**参见**

- #callAs(Subject, Callable)

> *Since 18*
