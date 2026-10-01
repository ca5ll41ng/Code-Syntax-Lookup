---
id: "python-zh-function-typing-assert_type"
language: "python"
lang: "zh"
category: "function"
name: "assert_type"
signature: "assert_type(val, typ, /)"
directive: "function"
module: "typing"
source_url: "https://docs.python.org/zh-cn/3/library/typing.html#typing.assert_type"
license: "PSF"
updated: "2026-10-01"
---

# assert_type

让静态类型检查器确认 *val* 具有推断为 *typ* 的类型。

At runtime this does nothing: it returns the first argument unchanged with no
checks or side effects, no matter the actual type of the argument.

When a static type checker encounters a call to `assert_type()`, it
emits an error if the value is not of the specified type::

    def greet(name: str) -> None:
        assert_type(name, str)  # OK, inferred type of `name` is `str`
        assert_type(name, int)  # type checker error

This function is useful for ensuring the type checker's understanding of a
script is in line with the developer's intentions::

    def complex_function(arg: object):
        # Do some complex type-narrowing logic,
        # after which we hope the inferred type will be `int`
        ...
        # Test whether the type checker correctly understands our function
        assert_type(arg, int)

> *Added in 3.11*
