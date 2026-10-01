---
id: "java-en-function-logincontext-getsubject"
language: "java"
lang: "en"
category: "function"
name: "LoginContext.getSubject"
signature: "public Subject getSubject()"
title: "LoginContext.getSubject"
directive: "method"
module: "java.base/javax.security.auth.login"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/login/LoginContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LoginContext.getSubject

```java
public Subject getSubject()
```

Return the authenticated Subject.

**返回**

- the authenticated Subject.  If the caller specified a Subject to this LoginContext's constructor, this method returns the caller-specified Subject. If a Subject was not specified and authentication succeeds, this method returns the Subject instantiated and used for authentication by this LoginContext. If a Subject was not specified, and authentication fails or has not been attempted, this method returns null.
