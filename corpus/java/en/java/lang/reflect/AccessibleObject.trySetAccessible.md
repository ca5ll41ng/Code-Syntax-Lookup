---
id: "java-en-function-accessibleobject-trysetaccessible"
language: "java"
lang: "en"
category: "function"
name: "AccessibleObject.trySetAccessible"
signature: "public final boolean trySetAccessible()"
title: "AccessibleObject.trySetAccessible"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/AccessibleObject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AccessibleObject.trySetAccessible

```java
public final boolean trySetAccessible()
```

Set the `accessible` flag for this reflected object to `true`
 if possible. This method sets the `accessible` flag, as if by
 invoking `setAccessible`, and returns
 the possibly-updated value for the `accessible` flag. If access
 cannot be enabled, i.e. the checks or Java language access control cannot
 be suppressed, this method returns `false` (as opposed to `setAccessible(true)` throwing `InaccessibleObjectException` when
 it fails).

 

 This method is a no-op if the `accessible` flag for
 this reflected object is `true`.

 

 For example, a caller can invoke `trySetAccessible`
 on a `Method` object for a private instance method
 `p.T::privateMethod` to suppress the checks for Java language access
 control when the `Method` is invoked.
 If `p.T` class is in a different module to the caller and
 package `p` is open to at least the caller's module,
 the code below successfully sets the `accessible` flag
 to `true`.

 
```

 `p.T obj = ....;  // instance of p.T
     :
     Method m = p.T.class.getDeclaredMethod("privateMethod");
     if (m.trySetAccessible()) {
         m.invoke(obj);
     ` else {
         // package p is not opened to the caller to access private member of T
         ...
     }
 }
```

 

 If this method is invoked by JNI code
 with no caller class on the stack, the `accessible` flag can
 only be set if the member and the declaring class are public, and
 the class is in a package that is exported unconditionally.

**返回**

- `true` if the `accessible` flag is set to `true`; `false` if access cannot be enabled.

**参见**

- java.lang.invoke.MethodHandles#privateLookupIn

> *Since 9*
