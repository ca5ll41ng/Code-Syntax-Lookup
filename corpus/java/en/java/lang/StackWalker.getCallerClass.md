---
id: "java-en-function-stackwalker-getcallerclass"
language: "java"
lang: "en"
category: "function"
name: "StackWalker.getCallerClass"
signature: "public Class<?> getCallerClass()"
title: "StackWalker.getCallerClass"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StackWalker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StackWalker.getCallerClass

```java
public Class<?> getCallerClass()
```

Gets the `Class` object of the caller who invoked the method
 that invoked `getCallerClass`.

 

 This method filters `SHOW_REFLECT_FRAMES reflection
 frames`, `java.lang.invoke.MethodHandle`, and
 `SHOW_HIDDEN_FRAMES hidden frames` regardless of the
 `SHOW_REFLECT_FRAMES SHOW_REFLECT_FRAMES`
 and `SHOW_HIDDEN_FRAMES SHOW_HIDDEN_FRAMES` options
 this `StackWalker` has been configured with.

 

 This method should be called when a caller frame is present.  If
 it is called from the bottom most frame on the stack,
 `IllegalCallerException` will be thrown.

 

 This method throws `UnsupportedOperationException`
 if this `StackWalker` is not configured with the
 `RETAIN_CLASS_REFERENCE RETAIN_CLASS_REFERENCE` option.

 For example, `Util::getResourceBundle` loads a resource bundle
 on behalf of the caller.  It invokes `getCallerClass` to identify
 the class whose method called `Util::getResourceBundle`.
 Then, it obtains the class loader of that class, and uses
 the class loader to load the resource bundle. The caller class
 in this example is `MyTool`.

 {@snippet lang="java" :
 class Util {
     private final StackWalker walker =
         StackWalker.getInstance(Set.of(Option.DROP_METHOD_INFO, Option.RETAIN_CLASS_REFERENCE));
     public ResourceBundle getResourceBundle(String bundleName) {
         Class<?> caller = walker.getCallerClass();
         return ResourceBundle.getBundle(bundleName, Locale.getDefault(), caller.getClassLoader());
     }
 }

 class MyTool {
     private final Util util = new Util();
     private void init() {
         ResourceBundle rb = util.getResourceBundle("mybundle");
     }
 }
 }

 An equivalent way to find the caller class using the
 `walk walk` method is as follows
 (filtering the reflection frames, `MethodHandle` and hidden frames
 not shown below):
 {@snippet lang="java" :
     Optional> caller = walker.walk(s ->
         s.map(StackFrame::getDeclaringClass)
          .skip(2)
          .findFirst());
 }

 When the `getCallerClass` method is called from a method that
 is the bottom most frame on the stack,
 for example, `static public void main` method launched by the
 `java` launcher, or a method invoked from a JNI attached thread,
 `IllegalCallerException` is thrown.

**返回**

- `Class` object of the caller's caller invoking this method.

**异常**

- **UnsupportedOperationException** — if this `StackWalker` is not configured with `RETAIN_CLASS_REFERENCE Option.RETAIN_CLASS_REFERENCE`.
- **IllegalCallerException** — if there is no caller frame, i.e. when this `getCallerClass` method is called from a method which is the last frame on the stack.
