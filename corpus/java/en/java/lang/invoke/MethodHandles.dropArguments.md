---
id: "java-en-function-methodhandles-droparguments"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.dropArguments"
signature: "public static MethodHandle dropArguments(MethodHandle target, int pos, List<Class<?>> valueTypes)"
title: "MethodHandles.dropArguments"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.dropArguments

```java
public static MethodHandle dropArguments(MethodHandle target, int pos, List<Class<?>> valueTypes)
```

Produces a method handle which will discard some dummy arguments
 before calling some other specified target method handle.
 The type of the new method handle will be the same as the target's type,
 except it will also include the dummy argument types,
 at some given position.
 

 The `pos` argument may range between zero and N,
 where N is the arity of the target.
 If `pos` is zero, the dummy arguments will precede
 the target's real arguments; if `pos` is N
 they will come after.
 

 **Example:**
 {@snippet lang="java" :
import static java.lang.invoke.MethodHandles.*;
import static java.lang.invoke.MethodType.*;
...
MethodHandle cat = lookup().findVirtual(String.class,
  "concat", methodType(String.class, String.class));
assertEquals("xy", (String) cat.invokeExact("x", "y"));
MethodType bigType = cat.type().insertParameterTypes(0, int.class, String.class);
MethodHandle d0 = dropArguments(cat, 0, bigType.parameterList().subList(0,2));
assertEquals(bigType, d0.type());
assertEquals("yz", (String) d0.invokeExact(123, "x", "y", "z"));
 }
 

 This method is also equivalent to the following code:
 
```

 `dropArguments(MethodHandle,int,Class...) dropArguments``(target, pos, valueTypes.toArray(new Class[0]))`
 
```

**参数**

- **target** — the method handle to invoke after the arguments are dropped
- **pos** — position of first argument to drop (zero for the leftmost)
- **valueTypes** — the type(s) of the argument(s) to drop

**返回**

- a method handle which drops arguments of the given types, before calling the original method handle

**异常**

- **NullPointerException** — if the target is null, or if the `valueTypes` list or any of its elements is null
- **IllegalArgumentException** — if any element of `valueTypes` is `void.class`, or if `pos` is negative or greater than the arity of the target, or if the new method handle's type would have too many parameters
