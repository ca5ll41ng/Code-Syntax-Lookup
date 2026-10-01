---
id: "python-en-function-itertools-groupby"
language: "python"
lang: "en"
category: "function"
name: "groupby"
signature: "groupby(iterable, key=None)"
directive: "function"
module: "itertools"
source_url: "https://docs.python.org/3/library/itertools.html#itertools.groupby"
license: "PSF"
updated: "2026-10-01"
---

# groupby

Make an iterator that returns consecutive keys and groups from the *iterable*.
The *key* is a function computing a key value for each element.  If not
specified or is `None`, *key* defaults to an identity function and returns
the element unchanged.  Generally, the iterable needs to already be sorted on
the same key function.

The operation of `groupby` is similar to the `uniq` filter in Unix.  It
generates a break or new group every time the value of the key function changes
(which is why it is usually necessary to have sorted the data using the same key
function).  That behavior differs from SQL's GROUP BY which aggregates common
elements regardless of their input order.

The returned group is itself an iterator that shares the underlying iterable
with `groupby`.  Because the source is shared, when the `groupby`
object is advanced, the previous group is no longer visible.  So, if that data
is needed later, it should be stored as a list::

   groups = []
   uniquekeys = []
   data = sorted(data, key=keyfunc)
   for k, g in groupby(data, keyfunc):
       groups.append(list(g))      # Store group iterator as a list
       uniquekeys.append(k)

`groupby` is roughly equivalent to::

   def groupby(iterable, key=None):
       # [k for k, g in groupby('AAAABBBCCDAABBB')] → A B C D A B
       # [list(g) for k, g in groupby('AAAABBBCCD')] → AAAA BBB CC D

       keyfunc = (lambda x: x) if key is None else key
       iterator = iter(iterable)
       exhausted = False

       def _grouper(target_key):
           nonlocal curr_value, curr_key, exhausted
           yield curr_value
           for curr_value in iterator:
               curr_key = keyfunc(curr_value)
               if curr_key != target_key:
                   return
               yield curr_value
           exhausted = True

       try:
           curr_value = next(iterator)
       except StopIteration:
           return
       curr_key = keyfunc(curr_value)

       while not exhausted:
           target_key = curr_key
           curr_group = _grouper(target_key)
           yield curr_key, curr_group
           if curr_key == target_key:
               for _ in curr_group:
                   pass
