---
id: "java-en-function-option-firstvariadicarg"
language: "java"
lang: "en"
category: "function"
name: "Option.firstVariadicArg"
signature: "static Option firstVariadicArg(int index)"
title: "Option.firstVariadicArg"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/Linker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Option.firstVariadicArg

```java
static Option firstVariadicArg(int index)
```

{@return a linker option used to denote the index indicating the start of the
          variadic arguments passed to the function described by the function
          descriptor associated with a downcall linkage request}
 

 The `index` value must conform to `0 <= index <= N`, where
 `N` is the number of argument layouts of the function descriptor used in
 conjunction with this linker option. When the `index` is:
 
 
- `0`, all arguments passed to the function are passed as variadic
     arguments
 
- `N`, none of the arguments passed to the function are passed as
     variadic arguments
 
- `m`, where `0 < m < N`, the arguments `m..N-1` are passed
     as variadic arguments
 

 It is important to always use this linker option when linking a
 variadic function, even if no variadic
 argument is passed (the second case in the list above), as this might still
 affect the calling convention on certain platforms.

           when the function descriptor against which the index is validated is
           available.

**参数**

- **index** — the index of the first variadic argument layout in the function descriptor associated with a downcall linkage request
