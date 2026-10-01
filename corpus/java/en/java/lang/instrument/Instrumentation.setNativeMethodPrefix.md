---
id: "java-en-function-instrumentation-setnativemethodprefix"
language: "java"
lang: "en"
category: "function"
name: "Instrumentation.setNativeMethodPrefix"
signature: "void setNativeMethodPrefix(ClassFileTransformer transformer, String prefix)"
title: "Instrumentation.setNativeMethodPrefix"
directive: "method"
module: "java.instrument/java.lang.instrument"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.instrument/java/lang/instrument/Instrumentation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Instrumentation.setNativeMethodPrefix

```java
void setNativeMethodPrefix(ClassFileTransformer transformer, String prefix)
```

This method modifies the failure handling of
 native method resolution by allowing retry
 with a prefix applied to the name.
 When used with the
 `java.lang.instrument.ClassFileTransformer ClassFileTransformer`,
 it enables native methods to be
 instrumented.
 

 Since native methods cannot be directly instrumented
 (they have no bytecodes), they must be wrapped with
 a non-native method which can be instrumented.
 For example, if we had:
 
```

   native boolean foo(int x);
```

 

 We could transform the class file (with the
 ClassFileTransformer during the initial definition
 of the class) so that this becomes:
 
```

   boolean foo(int x) {
     ... record entry to foo ...
     return wrapped_foo(x);
   }

   native boolean wrapped_foo(int x);
```

 

 Where foo becomes a wrapper for the actual native
 method with the appended prefix "wrapped_".  Note that
 "wrapped_" would be a poor choice of prefix since it
 might conceivably form the name of an existing method
 thus something like "$$$MyAgentWrapped$$$_" would be
 better but would make these examples less readable.
 

 The wrapper will allow data to be collected on the native
 method call, but now the problem becomes linking up the
 wrapped method with the native implementation.
 That is, the method wrapped_foo needs to be
 resolved to the native implementation of foo,
 which might be:
 
```

   Java_somePackage_someClass_foo(JNIEnv* env, jint x)
```

 

 This function allows the prefix to be specified and the
 proper resolution to occur.
 Specifically, when the standard resolution fails, the
 resolution is retried taking the prefix into consideration.
 There are two ways that resolution occurs, explicit
 resolution with the JNI function RegisterNatives
 and the normal automatic resolution.  For
 RegisterNatives, the JVM will attempt this
 association:
 
```
`method(foo) -> nativeImplementation(foo)
 `
```

 

 When this fails, the resolution will be retried with
 the specified prefix prepended to the method name,
 yielding the correct resolution:
 
```
`method(wrapped_foo) -> nativeImplementation(foo)
 `
```

 

 For automatic resolution, the JVM will attempt:
 
```
`method(wrapped_foo) -> nativeImplementation(wrapped_foo)
 `
```

 

 When this fails, the resolution will be retried with
 the specified prefix deleted from the implementation name,
 yielding the correct resolution:
 
```
`method(wrapped_foo) -> nativeImplementation(foo)
 `
```

 

 Note that since the prefix is only used when standard
 resolution fails, native methods can be wrapped selectively.
 

 Since each ClassFileTransformer
 can do its own transformation of the bytecodes, more
 than one layer of wrappers may be applied. Thus each
 transformer needs its own prefix.  Since transformations
 are applied in order, the prefixes, if applied, will
 be applied in the same order
 (see `addTransformer(ClassFileTransformer,boolean) addTransformer`).
 Thus if three transformers applied
 wrappers, foo might become
 $trans3_$trans2_$trans1_foo.  But if, say,
 the second transformer did not apply a wrapper to
 foo it would be just
 $trans3_$trans1_foo.  To be able to
 efficiently determine the sequence of prefixes,
 an intermediate prefix is only applied if its non-native
 wrapper exists.  Thus, in the last example, even though
 $trans1_foo is not a native method, the
 $trans1_ prefix is applied since
 $trans1_foo exists.

**参数**

- **transformer** — The ClassFileTransformer which wraps using this prefix.
- **prefix** — The prefix to apply to wrapped native methods when retrying a failed native method resolution. If prefix is either null or the empty string, then failed native method resolutions are not retried for this transformer.

**异常**

- **java.lang.NullPointerException** — if passed a null transformer.
- **java.lang.UnsupportedOperationException** — if the current configuration of the JVM does not allow setting a native method prefix (`isNativeMethodPrefixSupported` is false).
- **java.lang.IllegalArgumentException** — if the transformer is not registered (see `addTransformer(ClassFileTransformer,boolean) addTransformer`).

> *Since 1.6*
