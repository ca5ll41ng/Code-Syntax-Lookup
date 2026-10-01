---
id: "java-en-function-factory-resolveorfail"
language: "java"
lang: "en"
category: "function"
name: "Factory.resolveOrFail"
signature: "public <NoSuchMemberException extends ReflectiveOperationException> MemberName resolveOrFail(byte refKind, MemberName m, Class<?> lookupClass, int allowedModes, Class<NoSuchMemberException> nsmClass) throws IllegalAccessException, NoSuchMemberException"
title: "Factory.resolveOrFail"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MemberName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Factory.resolveOrFail

```java
public <NoSuchMemberException extends ReflectiveOperationException> MemberName resolveOrFail(byte refKind, MemberName m, Class<?> lookupClass, int allowedModes, Class<NoSuchMemberException> nsmClass) throws IllegalAccessException, NoSuchMemberException
```

Produce a resolved version of the given member.
  Super types are searched (for inherited members) if `searchSupers` is true.
  Access checking is performed on behalf of the given `lookupClass`.
  If lookup fails or access is not permitted, a `ReflectiveOperationException` is thrown.
  Otherwise a fresh copy of the given member is returned, with modifier bits filled in.
