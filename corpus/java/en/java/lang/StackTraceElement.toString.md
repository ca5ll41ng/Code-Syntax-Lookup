---
id: "java-en-function-stacktraceelement-tostring"
language: "java"
lang: "en"
category: "function"
name: "StackTraceElement.toString"
signature: "public String toString()"
title: "StackTraceElement.toString"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StackTraceElement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StackTraceElement.toString

```java
public String toString()
```

Returns a string representation of this stack trace element.

 following examples may be regarded as typical:
 
 
- 
     "`com.foo.loader/foo@9.0/com.foo.Main.run(Main.java:101)`"
 - See the description below.
 
 
- 
     "`com.foo.loader/foo@9.0/com.foo.Main.run(Main.java)`"
 - The line number is unavailable.
 
 
- 
     "`com.foo.loader/foo@9.0/com.foo.Main.run(Unknown Source)`"
 - Neither the file name nor the line number is available.
 
 
- 
     "`com.foo.loader/foo@9.0/com.foo.Main.run(Native Method)`"
 - The method containing the execution point is a native method.
 
 
- 
     "`com.foo.loader//com.foo.bar.App.run(App.java:12)`"
 - The class of the execution point is defined in the unnamed module of
 the class loader named `com.foo.loader`.
 
 
- 
     "`acme@2.1/org.acme.Lib.test(Lib.java:80)`"
 - The class of the execution point is defined in `acme` module
 loaded by a built-in class loader such as the application class loader.
 
 
- 
     "`MyClass.mash(MyClass.java:9)`"
 - `MyClass` class is on the application class path.
 
 

 

 The first example shows a stack trace element consisting of
 three elements, each separated by `"/"`, followed by
 the source file name and the line number of the source line
 containing the execution point.

 The first element "`com.foo.loader`" is
 the name of the class loader.  The second element "`foo@9.0`"
 is the module name and version.  The third element is the method
 containing the execution point; "`com.foo.Main"`" is the
 binary name and "`run`" is the name of the method.
 "`Main.java`" is the source file name and "`101`" is
 the line number.

 

 If a class is defined in an unnamed module
 then the second element is omitted as shown in
 "`com.foo.loader//com.foo.bar.App.run(App.java:12)`".

 

 If the class loader is a 
 built-in class loader or is not named then the first element
 and its following `"/"` are omitted as shown in
 "`acme@2.1/org.acme.Lib.test(Lib.java:80)`".
 If the first element is omitted and the module is an unnamed module,
 the second element and its following `"/"` are also omitted
 as shown in "`MyClass.mash(MyClass.java:9)`".

 

 The `toString` method may return two different values on two
 `StackTraceElement` instances that are
 `equals(Object) equal`, for example one created via the
 constructor, and one obtained from `java.lang.Throwable` or
 `java.lang.StackWalker.StackFrame`, where an implementation may
 choose to omit some element in the returned string.

**参见**

- Throwable#printStackTrace()
