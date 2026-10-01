---
id: "java-en-function-accessibleobject-canaccess"
language: "java"
lang: "en"
category: "function"
name: "AccessibleObject.canAccess"
signature: "public final boolean canAccess(Object obj)"
title: "AccessibleObject.canAccess"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/AccessibleObject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AccessibleObject.canAccess

```java
public final boolean canAccess(Object obj)
```

Test if the caller can access this reflected object. If this reflected
 object corresponds to an instance method or field then this method tests
 if the caller can access the given `obj` with the reflected object.
 For instance methods or fields then the `obj` argument must be an
 instance of the `getDeclaringClass() declaring class`. For
 static members and constructors then `obj` must be `null`.

 

 This method returns `true` if the `accessible` flag
 is set to `true`, i.e. the checks for Java language access control
 are suppressed, or if the caller can access the member as
 specified in The Java Language Specification,
 with the variation noted in the class description.
 If this method is invoked by JNI code
 with no caller class on the stack, this method returns `true`
 if the member and the declaring class are public, and the class is in
 a package that is exported unconditionally.

**参数**

- **obj** — an instance object of the declaring class of this reflected object if it is an instance method or field

**返回**

- `true` if the caller can access this reflected object.

**异常**

- **IllegalArgumentException** — -  if this reflected object is a static member or constructor and the given `obj` is non-`null`, or  -  if this reflected object is an instance method or field and the given `obj` is `null` or of type that is not a subclass of the `getDeclaringClass() declaring class` of the member.

**参见**

- #trySetAccessible
- #setAccessible(boolean)

> *Since 9*
