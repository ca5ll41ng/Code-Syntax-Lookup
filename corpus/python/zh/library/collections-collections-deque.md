---
id: "python-zh-function-collections-deque"
language: "python"
lang: "zh"
category: "function"
name: "deque"
signature: "deque([iterable, [maxlen]])"
directive: "class"
module: "collections"
source_url: "https://docs.python.org/zh-cn/3/library/collections.html#collections.deque"
license: "PSF"
updated: "2026-10-01"
---

# deque

Returns a new deque object initialized left-to-right (using `append`) with
data from *iterable*.  If *iterable* is not specified, the new deque is empty.

Deques are a generalization of stacks and queues (the name is pronounced "deck"
and is short for "double-ended queue").  Deques support thread-safe, memory
efficient appends and pops from either side of the deque with approximately the
same *O*\ (1) performance in either direction.

Though `list` objects support similar operations, they are optimized for
fast fixed-length operations and incur *O*\ (*n*) memory movement costs for
`pop(0)` and `insert(0, v)` operations which change both the size and
position of the underlying data representation.

If *maxlen* is not specified or is `None`, deques may grow to an
arbitrary length.  Otherwise, the deque is bounded to the specified maximum
length.  Once a bounded length deque is full, when new items are added, a
corresponding number of items are discarded from the opposite end.  Bounded
length deques provide functionality similar to the `tail` filter in
Unix. They are also useful for tracking transactions and other pools of data
where only the most recent activity is of interest.

双端队列是对应其内容类型的 :ref:`泛型 <generics>` 对象。

双向队列(deque)对象支持以下方法：

method:: append(item, /)

method:: appendleft(item, /)

method:: clear()

method:: copy()

method:: count(value, /)

method:: extend(iterable, /)

method:: extendleft(iterable, /)

method:: index(value[, start[, stop]])

method:: insert(index, value, /)

method:: pop()

method:: popleft()

method:: remove(value, /)

method:: reverse()

method:: rotate(n=1, /)

Deque对象同样提供了一个只读属性:

attribute:: maxlen
