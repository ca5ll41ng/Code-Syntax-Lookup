---
id: "java-en-function-java-lang-comparable"
language: "java"
lang: "en"
category: "function"
name: "java.lang.Comparable"
title: "Comparable"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Comparable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Comparable

This interface imposes a total ordering on the objects of each class that
 implements it.  This ordering is referred to as the class's natural
 ordering, and the class's `compareTo` method is referred to as
 its natural comparison method.

 Lists (and arrays) of objects that implement this interface can be sorted
 automatically by `sort(List) Collections.sort` (and
 `sort(Object[]) Arrays.sort`).  Objects that implement this
 interface can be used as keys in a `SortedMap sorted map` or as
 elements in a `SortedSet sorted set`, without the need to
 specify a `Comparator comparator`.

 The natural ordering for a class `C` is said to be consistent
 with equals if and only if `e1.compareTo(e2) == 0` has
 the same boolean value as `e1.equals(e2)` for every
 `e1` and `e2` of class `C`.  Note that `null`
 is not an instance of any class, and `e.compareTo(null)` should
 throw a `NullPointerException` even though `e.equals(null)`
 returns `false`.

 It is strongly recommended (though not required) that natural orderings be
 consistent with equals.  This is so because sorted sets (and sorted maps)
 without explicit comparators behave "strangely" when they are used with
 elements (or keys) whose natural ordering is inconsistent with equals.  In
 particular, such a sorted set (or sorted map) violates the general contract
 for set (or map), which is defined in terms of the `equals`
 method.

 For example, if one adds two keys `a` and `b` such that
 `(!a.equals(b) && a.compareTo(b) == 0)` to a sorted
 set that does not use an explicit comparator, the second `add`
 operation returns false (and the size of the sorted set does not increase)
 because `a` and `b` are equivalent from the sorted set's
 perspective.

 Virtually all Java core classes that implement `Comparable`
 have natural orderings that are consistent with equals.  One
 exception is `java.math.BigDecimal`, whose `compareTo natural ordering` equates `BigDecimal` objects with equal numerical values and different
 representations (such as 4.0 and 4.00). For `equals BigDecimal.equals` to return true,
 the representation and numerical value of the two `BigDecimal` objects must be the same.

 For the mathematically inclined, the relation that defines
 the natural ordering on a given class C is:
```
`{(x, y) such that x.compareTo(y) <= 0`.
 }
```
 The quotient for this total order is: 
```
`{(x, y) such that x.compareTo(y) == 0`.
 }
```

 It follows immediately from the contract for `compareTo` that the
 quotient is an equivalence relation on `C`, and that the
 natural ordering is a total order on `C`.  When we say that a
 class's natural ordering is consistent with equals, we mean that the
 quotient for the natural ordering is the equivalence relation defined by
 the class's `equals` method:
```

     {(x, y) such that x.equals(y)}. 
```

 In other words, when a class's natural ordering is consistent with
 equals, the equivalence classes defined by the equivalence relation
 of the `equals` method and the equivalence classes defined by
 the quotient of the `compareTo` method are the same.

 

This interface is a member of the
 
 Java Collections Framework.

**参数**

- **the** — type of objects that this object may be compared to

**参见**

- java.util.Comparator

> *Since 1.2*
