---
id: "java-en-function-java-lang-string"
language: "java"
lang: "en"
category: "function"
name: "java.lang.String"
title: "String"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String

The `String` class represents character strings. All
 string literals in Java programs, such as `"abc"`, are
 implemented as instances of this class.
 

 Strings are immutable; their values cannot be changed after they
 are created. Because String objects are immutable they can be shared.
 For example:
 
```

     String str = "abc";
 
```

 is equivalent to:
 
```

     char data[] = {'a', 'b', 'c'};
     String str = new String(data);
 
```

 Here are some more examples of how strings can be used:
 
```

     System.out.println("abc");
     String cde = "cde";
     System.out.println("abc" + cde);
     String c = "abc".substring(2, 3);
     String d = cde.substring(1, 2);
 
```

 

 The class `String` includes methods for examining
 individual characters of the sequence, for comparing strings, for
 searching strings, for extracting substrings, and for creating a
 copy of a string with all characters translated to uppercase or to
 lowercase. Case mapping is based on the Unicode Standard version
 specified by the `java.lang.Character Character` class.
 

 The Java language provides special support for the string
 concatenation operator (&nbsp;+&nbsp;), and for conversion of
 other objects to strings. For additional information on string
 concatenation and conversion, see The Java Language Specification.

 

 Unless otherwise noted, passing a `null` argument to a constructor
 or method in this class will cause a `NullPointerException` to be
 thrown.

 

A `String` represents a string in the UTF-16 format
 in which supplementary characters are represented by surrogate
 pairs (see the section Unicode
 Character Representations in the `Character` class for
 more information).
 Index values refer to `char` code units, so a supplementary
 character uses two positions in a `String`.
 

The `String` class provides methods for dealing with
 Unicode code points (i.e., characters), in addition to those for
 dealing with Unicode code units (i.e., `char` values).

 

**String comparison and case-insensitive matching**

 

There are several related ways to compare `String` values; choose
 the one whose semantics fit your purpose:

 
   
- **Exact content equality** — `equals` checks that two
       strings contain the identical char sequence of UTF-16 code units. This is
       a strict, case-sensitive comparison suitable for exact matching, hashing
       and any situation that requires bit-for-bit stability.

   
- **Simple case-insensitive equality** — `equalsIgnoreCase`
       (and the corresponding `compareToIgnoreCase` and `CASE_INSENSITIVE_ORDER`)
       performs a per-code-point, locale-independent comparison using
       `toUpperCase` and `toLowerCase`.
       It is convenient for many common case-insensitive checks.

   
- **Unicode case-folded equivalence** — `equalsFoldCase`
       (and the corresponding `compareToFoldCase` and `UNICODE_CASEFOLD_ORDER`)
       implement the Unicode {@index "full case folding"} rules defined in
       Unicode CaseFolding.txt.
       Case folding is locale-independent and language-neutral and may map a single code
       point to multiple code points (1:M mappings). For example, the German sharp
       s (`U+00DF`) is folded to the sequence `"ss"`.
       Use these methods when you need Unicode-compliant
       
       caseless matching, searching, or ordering.
 

 

Unless otherwise noted, methods for comparing Strings do not take locale into
 account. The `java.text.Collator` class provides methods for finer-grain,
 locale-sensitive String comparison.

 the discretion of a Java compiler, as long as the compiler ultimately conforms
 to The Java Language Specification. For example, the `javac` compiler
 may implement the operator with `StringBuffer`, `StringBuilder`,
 or `java.lang.invoke.StringConcatFactory` depending on the JDK version. The
 implementation of string conversion is typically through the method `toString`,
 defined by `Object` and inherited by all classes in Java.

**参见**

- java.lang.Object#toString()
- java.lang.StringBuffer
- java.lang.StringBuilder
- java.nio.charset.Charset

> *Since 1.0*
