---
id: "python-en-function-typing-bytestring"
language: "python"
lang: "en"
category: "function"
name: "ByteString"
signature: "ByteString(Sequence[int])"
directive: "class"
module: "typing"
source_url: "https://docs.python.org/3/library/typing.html#typing.ByteString"
license: "PSF"
updated: "2026-10-01"
---

# ByteString

Deprecated alias to `collections.abc.ByteString`.

Use `isinstance(obj, collections.abc.Buffer)` to test if `obj`
implements the `buffer protocol` at runtime. For use in
type annotations, either use `~collections.abc.Buffer` or a union
that explicitly specifies the types your code supports (e.g.,
`bytes  bytearray  memoryview`).

`ByteString` was originally intended to be an abstract class that
would serve as a supertype of both `bytes` and `bytearray`.
However, since the ABC never had any methods, knowing that an object was an
instance of `ByteString` never actually told you anything useful
about the object. Other common buffer types such as `memoryview` were
also never understood as subtypes of `ByteString` (either at runtime
or by static type checkers).

See PEP PEP 688 <688#current-options> for more details.

deprecated-removed:: 3.9 3.17
