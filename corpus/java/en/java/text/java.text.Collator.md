---
id: "java-en-function-java-text-collator"
language: "java"
lang: "en"
category: "function"
name: "java.text.Collator"
title: "Collator"
directive: "type"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/Collator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collator

The `Collator` class performs locale-sensitive
 `String` comparison. You use this class to build
 searching and sorting routines for natural language text.

 

 `Collator` is an abstract base class. Subclasses
 implement specific collation strategies. One subclass,
 `RuleBasedCollator`, is currently provided with
 the Java Platform and is applicable to a wide set of languages. Other
 subclasses may be created to handle more specialized needs.

 

 Like other locale-sensitive classes, you can use the static
 factory method, `getInstance`, to obtain the appropriate
 `Collator` object for a given locale. You will only need
 to look at the subclasses of `Collator` if you need
 to understand the details of a particular collation strategy or
 if you need to modify that strategy.

 

 The following example shows how to compare two strings using
 the `Collator` for the default locale.
 {@snippet lang=java :
 // Compare two strings in the default locale
 Collator myCollator = Collator.getInstance();
 if (myCollator.compare("abc", "ABC") < 0) {
     System.out.println("abc is less than ABC");
 } else {
     System.out.println("abc is greater than or equal to ABC");
 }
 }

 

 You can set a `Collator`'s strength property
 to determine the level of difference considered significant in
 comparisons. Four strengths are provided: `PRIMARY`,
 `SECONDARY`, `TERTIARY`, and `IDENTICAL`.
 The exact assignment of strengths to language features is
 locale dependent.  For example, in Czech, "e" and "f" are considered
 primary differences, while "e" and "&#283;" are secondary differences,
 "e" and "E" are tertiary differences and "e" and "e" are identical.
 The following shows how both case and accents could be ignored for
 US English.
 {@snippet lang=java :
 // Get the Collator for US English and set its strength to PRIMARY
 Collator usCollator = Collator.getInstance(Locale.US);
 usCollator.setStrength(Collator.PRIMARY);
 if (usCollator.compare("abc", "ABC") == 0) {
     System.out.println("Strings are equivalent");
 }
 }
 

 For comparing `String`s exactly once, the `compare`
 method provides the best performance. When sorting a list of
 `String`s however, it is generally necessary to compare each
 `String` multiple times. In this case, `CollationKey`s
 provide better performance. The `CollationKey` class converts
 a `String` to a series of bits that can be compared bitwise
 against other `CollationKey`s. A `CollationKey` is
 created by a `Collator` object for a given `String`.
 

 `Collator`s can not be compared. See the class description
 for `CollationKey` for an example using `CollationKey`s.

 of the JDK Reference Implementation's `RuleBasedCollator`, which is the
 subtype returned by the default provider of the `getInstance` factory
 methods. As such, users should consider retrieving a separate instance for
 each thread when used in multithreaded environments.

**参见**

- RuleBasedCollator
- CollationKey
- CollationElementIterator
- Locale

> *Since 1.1*
