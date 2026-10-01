---
id: "java-en-function-arrays-parallelsetall"
language: "java"
lang: "en"
category: "function"
name: "Arrays.parallelSetAll"
signature: "public static <T> void parallelSetAll(T[] array, IntFunction<? extends T> generator)"
title: "Arrays.parallelSetAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Arrays.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Arrays.parallelSetAll

```java
public static <T> void parallelSetAll(T[] array, IntFunction<? extends T> generator)
```

Set all elements of the specified array, in parallel, using the
 provided generator function to compute each element.

 

If the generator function throws an exception, an unchecked exception
 is thrown from `parallelSetAll` and the array is left in an
 indeterminate state.

 Setting a subrange of an array, in parallel, using a generator function
 to compute each element, can be written as follows:
 
```
`IntStream.range(startInclusive, endExclusive)
          .parallel()
          .forEach(i -> array[i] = generator.apply(i));
 `
```

**参数**

- **type** — of elements of the array
- **array** — array to be initialized
- **generator** — a function accepting an index and producing the desired value for that position

**异常**

- **NullPointerException** — if the generator is null

> *Since 1.8*
