---
id: "python-zh-function-typing-assert_never"
language: "python"
lang: "zh"
category: "function"
name: "assert_never"
signature: "assert_never(arg, /)"
directive: "function"
module: "typing"
source_url: "https://docs.python.org/zh-cn/3/library/typing.html#typing.assert_never"
license: "PSF"
updated: "2026-10-01"
---

# assert_never

让静态类型检查器确认一行代码是不可达的。

示例：

    def int_or_str(arg: int | str) -> None:
        match arg:
            case int():
                print("It's an int")
            case str():
                print("It's a str")
            case _ as unreachable:
                assert_never(unreachable)

Here, the annotations allow the type checker to infer that the
last case can never execute, because `arg` is either
an `int` or a `str`, and both options are covered by
earlier cases.

If a type checker finds that a call to `assert_never()` is
reachable, it will emit an error. For example, if the type annotation
for `arg` was instead `int  str  float`, the type checker would
emit an error pointing out that `unreachable` is of type `float`.
For a call to `assert_never` to pass type checking, the inferred type of
the argument passed in must be the bottom type, `Never`, and nothing
else.

在运行时，如果调用此函数将抛出一个异常。

> **Seealso**
>
> `Unreachable Code and Exhaustiveness Checking
> <https://typing.python.org/en/latest/guides/unreachable.html>`__ has more
> information about exhaustiveness checking with static typing.
>

> *Added in 3.11*
