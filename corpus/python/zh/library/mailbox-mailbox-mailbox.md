---
id: "python-zh-function-mailbox-mailbox"
language: "python"
lang: "zh"
category: "function"
name: "Mailbox"
directive: "class"
module: "mailbox"
source_url: "https://docs.python.org/zh-cn/3/library/mailbox.html#mailbox.Mailbox"
license: "PSF"
updated: "2026-10-01"
---

# Mailbox

一个邮箱，它可以被检视和修改。

The `Mailbox` class defines an interface and is not intended to be
instantiated.  Instead, format-specific subclasses should inherit from
`Mailbox` and your code should instantiate a particular subclass.

The `Mailbox` interface is dictionary-like, with small keys
corresponding to messages. Keys are issued by the `Mailbox` instance
with which they will be used and are only meaningful to that `Mailbox`
instance. A key continues to identify a message even if the corresponding
message is modified, such as by replacing it with another message.

Messages may be added to a `Mailbox` instance using the set-like
method `add` and removed using a `del` statement or the set-like
methods `remove` and `discard`.

`Mailbox` interface semantics differ from dictionary semantics in some
noteworthy ways. Each time a message is requested, a new representation
(typically a `Message` instance) is generated based upon the current
state of the mailbox. Similarly, when a message is added to a
`Mailbox` instance, the provided message representation's contents are
copied. In neither case is a reference to the message representation kept by
the `Mailbox` instance.

The default `Mailbox` `iterator` iterates over message
representations, not keys as the default `dictionary`
iterator does. Moreover, modification of a
mailbox during iteration is safe and well-defined. Messages added to the
mailbox after an iterator is created will not be seen by the
iterator. Messages removed from the mailbox before the iterator yields them
will be silently skipped, though using a key from an iterator may result in a
`KeyError` exception if the corresponding message is subsequently
removed.

> **Warning**
>
> Be very cautious when modifying mailboxes that might be simultaneously
> changed by some other process.  The safest mailbox format to use for such
> tasks is `Maildir`; try to avoid using single-file formats such as
> `mbox` for
> concurrent writing.  If you're modifying a mailbox, you *must* lock it by
> calling the `lock` and `unlock` methods *before* reading any
> messages in the file or making any changes by adding or deleting a
> message.  Failing to lock the mailbox runs the risk of losing messages or
> corrupting the entire mailbox.
>

The `Mailbox` class supports the `with` statement.  When used
as a context manager, `Mailbox` calls `lock` when the context is entered,
returns the mailbox object as the context object, and at context end calls `close`,
thereby releasing the lock.

> *Changed in 3.15*: Support for the :keyword:`with` statement was added.

:class:`!Mailbox` 实例具有下列方法：

method:: add(message)

method:: remove(key)

method:: __setitem__(key, message)

method:: iterkeys()

method:: keys()

method:: itervalues()

method:: values()

method:: iteritems()

method:: items()

method:: get(key, default=None)

method:: get_message(key)

method:: get_bytes(key)

method:: get_string(key)

method:: get_file(key)

method:: __contains__(key)

method:: __len__()

method:: clear()

method:: pop(key, default=None)

method:: popitem()

method:: update(arg)

method:: flush()

method:: lock()

method:: unlock()

method:: close()
