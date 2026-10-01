---
id: "python-en-function-dataclasses-__post_init__"
language: "python"
lang: "en"
category: "function"
name: "__post_init__"
signature: "__post_init__()"
directive: "function"
module: "dataclasses"
source_url: "https://docs.python.org/3/library/dataclasses.html#dataclasses.__post_init__"
license: "PSF"
updated: "2026-10-01"
---

# __post_init__

When defined on the class, it will be called by the generated
`~object.__init__`, normally as `self.__post_init__`.
However, if any `InitVar` fields are defined, they will also be
passed to `__post_init__` in the order they were defined in the
class.  If no `__init__` method is generated, then
`__post_init__` will not automatically be called.

Among other uses, this allows for initializing field values that
depend on one or more other fields.  For example::

  @dataclass
  class C:
      a: float
      b: float
      c: float = field(init=False)

      def __post_init__(self):
          self.c = self.a + self.b
