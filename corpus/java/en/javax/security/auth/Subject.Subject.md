---
id: "java-en-function-subject-subject"
language: "java"
lang: "en"
category: "function"
name: "Subject.Subject"
signature: "public Subject()"
title: "Subject.Subject"
directive: "method"
module: "java.base/javax.security.auth"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/Subject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Subject.Subject

```java
public Subject()
```

Create an instance of a `Subject`
 with an empty `Set` of Principals and empty
 Sets of public and private credentials.

 

 The newly constructed Sets check whether this `Subject`
 has been set read-only before permitting subsequent modifications.
 These Sets also prohibit null elements, and attempts to add, query,
 or remove a null element will result in a `NullPointerException`.
