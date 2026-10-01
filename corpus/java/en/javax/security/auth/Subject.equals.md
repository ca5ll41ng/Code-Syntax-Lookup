---
id: "java-en-function-subject-equals"
language: "java"
lang: "en"
category: "function"
name: "Subject.equals"
signature: "public boolean equals(Object o)"
title: "Subject.equals"
directive: "method"
module: "java.base/javax.security.auth"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/Subject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Subject.equals

```java
public boolean equals(Object o)
```

Compares the specified Object with this `Subject`
 for equality.  Returns true if the given object is also a Subject
 and the two `Subject` instances are equivalent.
 More formally, two `Subject` instances are
 equal if their `Principal` and `Credential`
 Sets are equal.

**参数**

- **o** — Object to be compared for equality with this `Subject`.

**返回**

- true if the specified Object is equal to this `Subject`.
